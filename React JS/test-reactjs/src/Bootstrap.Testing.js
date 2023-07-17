import React from 'react'

const Bootstrap_Testing = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Navbar</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>

            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>

            <div id="list-example" className="list-group">
                <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
            </div>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example">
                <h4 id="list-item-1">Item 1</h4>
                <p>...</p>tab
                <h4 id="list-item-2">Item 2</h4>
                <p>...</p>
                <h4 id="list-item-3">Item 3</h4>
                <p>...</p>
                <h4 id="list-item-4">Item 4</h4>
                <p>...</p>
            </div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25saW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi neque quaerat enim veritatis ipsam iusto voluptas officiis nobis asperiores ex temporibus dolor sunt culpa debitis, aut libero molestiae similique? Rerum.
                    Voluptatem ea totam, esse fugit dolor aspernatur provident est molestias quis beatae quia necessitatibus dignissimos ex soluta cum fuga adipisci dolores. Consectetur nobis ipsa laborum pariatur fugiat magni blanditiis voluptates.</div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat possimus autem, nam, dolorem tempora enim qui, soluta eius inventore a sint assumenda. Fuga sed consequuntur tenetur explicabo, assumenda temporibus impedit.
                    Maxime atque accusamus quo doloremque facilis nam enim culpa placeat, ad harum! Ducimus, quos commodi quasi nesciunt delectus aliquid error ipsa, quo, optio porro omnis! Laboriosam beatae officia vel. Ullam.</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, perferendis doloribus repellendus eum nobis, soluta exercitationem in dolorum, numquam impedit quam! Dolorum nam commodi esse est atque? Dolorum, dignissimos cupiditate!
                    Quod inventore, minima dolore repudiandae, veritatis odio doloremque, blanditiis cupiditate voluptate placeat illum laboriosam. Amet accusantium, necessitatibus, doloremque asperiores culpa officiis quod consequuntur doloribus, quasi rerum accusamus magni quae earum?</div>
            </div>
        </div>
    )
}

export default Bootstrap_Testing