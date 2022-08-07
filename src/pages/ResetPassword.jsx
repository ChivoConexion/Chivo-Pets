import React from 'react'

const ResetPassword = () => {
    return (
        <div class="auth-wrapper">
            <div class="auth-content">
                <div class="auth-bg">
                    <span class="r"></span>
                    <span class="r s"></span>
                    <span class="r s"></span>
                    <span class="r"></span>
                </div>
                <div class="card fondo">
                    <div class="card-body text-center fondo">
                       
                        <h4 class="mb-4 color1">Restablecer  contraseña</h4>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <button class="btn btn-primary mb-4 shadow-2">Restablecer </button>
                        <p class="mb-0 text-muted">¿No tienes una cuenta? <a href="auth-signup.html">Inscribirse</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResetPassword