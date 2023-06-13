import swal from "sweetalert2";

function logout() {
    swal.fire({
        title: 'Êtes-vous sûr?',
        text: "Vous allez être déconnecté!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('app:auth');
            window.location.href = '/login';
        }
    })
};

export default logout;