import React from 'react'

const SignUp = () => {
    return (
        <div class="auth-wrapper">
            <div class="auth-content">
                <div class="auth-bg">
                    <span class="r"></span>
                    <span class="r s"></span>
                    <span class="r s"></span>
                    <span class="r"></span>
                </div>
                <div class="card">
                    <div class="card-body text-center">
                        <div class="mb-4">
                            <i class="feather icon-user-plus auth-icon"></i>
                        </div>
                        <h3 class="mb-4">Sign up</h3>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Username" />
                        </div>
                        <div class="input-group mb-3">
                            <input type="email" class="form-control" placeholder="Email" />
                        </div>
                        <div class="input-group mb-4">
                            <input type="password" class="form-control" placeholder="password" />
                        </div>
                        <div class="form-group text-left">
                            <div class="checkbox checkbox-fill d-inline">
                                <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-1" checked="" />
                                <label for="checkbox-fill-1" class="cr"> Save Details</label>
                            </div>
                        </div>
                        <div class="form-group text-left">
                            <div class="checkbox checkbox-fill d-inline">
                                <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2" />
                                <label for="checkbox-fill-2" class="cr">Send me the <a href="#!"> Newsletter</a> weekly.</label>
                            </div>
                        </div>
                        <button class="btn btn-primary shadow-2 mb-4">Sign up</button>
                        <p class="mb-0 text-muted">Allready have an account? <a href="auth-signin.html"> Log in</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp