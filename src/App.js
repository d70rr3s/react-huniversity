const data = import('./data.json');

function App() {
  return (
    <>
      <header className="cabecera container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="titulo">Pacientes</h1>
            <a className="cambiar-estado btn" href="cambiar-estado">Cambiar (3)</a>
            <nav>
              <ul className="list-inline">
                <li className="list-inline-item"><a className="btn" href="filtro-cama">Con cama</a></li>
                <li className="list-inline-item"><a className="btn" href="filtro-espera">En espera</a></li>
                <li className="list-inline-item"><a className="btn activo" href="filtro-todos">Todos</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="container-fluid">
        <ul className="pacientes row list-unstyled">
          <li className="paciente col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="icono bx bx-male-sign"></i>
                <h3 className="nombre marcado"><a href="marcar">Manuel</a></h3>
                <i className="icono bx bx-bed"></i>
              </div>
              <ul className="datos-paciente list-group list-group-flush">
                <li className="list-group-item">
                  <i className="icono bx bxs-watch"></i> Edad: 25
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bx-calendar"></i> Días de ingreso: 3
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bxs-pizza"></i> Dieta: Baja en fibra
                        </li>
              </ul>
              <div className="botonera">
                <a href="modificar-edad" title="Modificar edad"><i className="icono bx bxs-watch"></i></a>
                <a href="modificar-dias" title="Modificar días de ingreso"><i className="icono bx bx-calendar"></i></a>
                <a href="modificar-dieta" title="Modificar dieta"><i className="icono bx bxs-pizza"></i></a>
                <form className="form-inline" hidden>
                  <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="edad">Días: </label>
                    <input type="number" id="dias-ingreso" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="dieta">Dieta: </label>
                    <select id="dieta" className="form-control form-control-sm">
                      <option value="baja-en-fibra">Baja en fibra</option>
                      <option value="baja-en-fibra">Diabetes</option>
                      <option value="baja-en-fibra">Sin sal</option>
                    </select>
                  </div>
                  <div className="acciones">
                    <button type="submit">
                      <i className="icono bx bxs-check-circle"></i>
                    </button>
                    <a href="cerrar">
                      <i className="icono bx bxs-x-circle"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="paciente col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="icono bx bx-male-sign"></i>
                <h3 className="nombre"><a href="marcar">Manuel</a></h3>
                <i className="icono bx bx-bed"></i>
              </div>
              <ul className="datos-paciente list-group list-group-flush">
                <li className="list-group-item">
                  <i className="icono bx bxs-watch"></i> Edad: 25
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bx-calendar"></i> Días de ingreso: 3
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bxs-pizza"></i> Dieta: Baja en fibra
                        </li>
              </ul>
              <div className="botonera">
                <a href="modificar-edad" title="Modificar edad"><i className="icono bx bxs-watch"></i></a>
                <a href="modificar-dias" title="Modificar días de ingreso"><i className="icono bx bx-calendar"></i></a>
                <a href="modificar-dieta" title="Modificar dieta"><i className="icono bx bxs-pizza"></i></a>
                <form className="form-inline" hidden>
                  <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="edad">Días: </label>
                    <input type="number" id="dias-ingreso" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="dieta">Dieta: </label>
                    <select id="dieta" className="form-control form-control-sm">
                      <option value="baja-en-fibra">Baja en fibra</option>
                      <option value="baja-en-fibra">Diabetes</option>
                      <option value="baja-en-fibra">Sin sal</option>
                    </select>
                  </div>
                  <div className="acciones">
                    <button type="submit">
                      <i className="icono bx bxs-check-circle"></i>
                    </button>
                    <a href="cerrar">
                      <i className="icono bx bxs-x-circle"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="paciente col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="icono bx bx-male-sign"></i>
                <h3 className="nombre"><a href="marcar">Manuel</a></h3>
                <i className="icono bx bx-bed"></i>
              </div>
              <ul className="datos-paciente list-group list-group-flush">
                <li className="list-group-item">
                  <i className="icono bx bxs-watch"></i> Edad: 25
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bx-calendar"></i> Días de ingreso: 3
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bxs-pizza"></i> Dieta: Baja en fibra
                        </li>
              </ul>
              <div className="botonera">
                <a href="modificar-edad" title="Modificar edad"><i className="icono bx bxs-watch"></i></a>
                <a href="modificar-dias" title="Modificar días de ingreso"><i className="icono bx bx-calendar"></i></a>
                <a href="modificar-dieta" title="Modificar dieta"><i className="icono bx bxs-pizza"></i></a>
                <form className="form-inline" hidden>
                  <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="edad">Días: </label>
                    <input type="number" id="dias-ingreso" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="dieta">Dieta: </label>
                    <select id="dieta" className="form-control form-control-sm">
                      <option value="baja-en-fibra">Baja en fibra</option>
                      <option value="baja-en-fibra">Diabetes</option>
                      <option value="baja-en-fibra">Sin sal</option>
                    </select>
                  </div>
                  <div className="acciones">
                    <button type="submit">
                      <i className="icono bx bxs-check-circle"></i>
                    </button>
                    <a href="cerrar">
                      <i className="icono bx bxs-x-circle"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="paciente col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="icono bx bx-male-sign"></i>
                <h3 className="nombre"><a href="marcar">Manuel</a></h3>
                <i className="icono bx bx-bed"></i>
              </div>
              <ul className="datos-paciente list-group list-group-flush">
                <li className="list-group-item">
                  <i className="icono bx bxs-watch"></i> Edad: 25
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bx-calendar"></i> Días de ingreso: 3
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bxs-pizza"></i> Dieta: Baja en fibra
                        </li>
              </ul>
              <div className="botonera">
                <a href="modificar-edad" title="Modificar edad"><i className="icono bx bxs-watch"></i></a>
                <a href="modificar-dias" title="Modificar días de ingreso"><i className="icono bx bx-calendar"></i></a>
                <a href="modificar-dieta" title="Modificar dieta"><i className="icono bx bxs-pizza"></i></a>
                <form className="form-inline" hidden>
                  <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="edad">Días: </label>
                    <input type="number" id="dias-ingreso" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="dieta">Dieta: </label>
                    <select id="dieta" className="form-control form-control-sm">
                      <option value="baja-en-fibra">Baja en fibra</option>
                      <option value="baja-en-fibra">Diabetes</option>
                      <option value="baja-en-fibra">Sin sal</option>
                    </select>
                  </div>
                  <div className="acciones">
                    <button type="submit">
                      <i className="icono bx bxs-check-circle"></i>
                    </button>
                    <a href="cerrar">
                      <i className="icono bx bxs-x-circle"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="paciente col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="icono bx bx-male-sign"></i>
                <h3 className="nombre"><a href="marcar">Manuel</a></h3>
                <i className="icono bx bx-bed"></i>
              </div>
              <ul className="datos-paciente list-group list-group-flush">
                <li className="list-group-item">
                  <i className="icono bx bxs-watch"></i> Edad: 25
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bx-calendar"></i> Días de ingreso: 3
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bxs-pizza"></i> Dieta: Baja en fibra
                        </li>
              </ul>
              <div className="botonera">
                <a href="modificar-edad" title="Modificar edad"><i className="icono bx bxs-watch"></i></a>
                <a href="modificar-dias" title="Modificar días de ingreso"><i className="icono bx bx-calendar"></i></a>
                <a href="modificar-dieta" title="Modificar dieta"><i className="icono bx bxs-pizza"></i></a>
                <form className="form-inline" hidden>
                  <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="edad">Días: </label>
                    <input type="number" id="dias-ingreso" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="dieta">Dieta: </label>
                    <select id="dieta" className="form-control form-control-sm">
                      <option value="baja-en-fibra">Baja en fibra</option>
                      <option value="baja-en-fibra">Diabetes</option>
                      <option value="baja-en-fibra">Sin sal</option>
                    </select>
                  </div>
                  <div className="acciones">
                    <button type="submit">
                      <i className="icono bx bxs-check-circle"></i>
                    </button>
                    <a href="cerrar">
                      <i className="icono bx bxs-x-circle"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="paciente col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="icono bx bx-male-sign"></i>
                <h3 className="nombre"><a href="marcar">Manuel</a></h3>
                <i className="icono bx bx-bed"></i>
              </div>
              <ul className="datos-paciente list-group list-group-flush">
                <li className="list-group-item">
                  <i className="icono bx bxs-watch"></i> Edad: 25
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bx-calendar"></i> Días de ingreso: 3
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bxs-pizza"></i> Dieta: Baja en fibra
                        </li>
              </ul>
              <div className="botonera">
                <a href="modificar-edad" title="Modificar edad"><i className="icono bx bxs-watch"></i></a>
                <a href="modificar-dias" title="Modificar días de ingreso"><i className="icono bx bx-calendar"></i></a>
                <a href="modificar-dieta" title="Modificar dieta"><i className="icono bx bxs-pizza"></i></a>
                <form className="form-inline" hidden>
                  <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="edad">Días: </label>
                    <input type="number" id="dias-ingreso" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="dieta">Dieta: </label>
                    <select id="dieta" className="form-control form-control-sm">
                      <option value="baja-en-fibra">Baja en fibra</option>
                      <option value="baja-en-fibra">Diabetes</option>
                      <option value="baja-en-fibra">Sin sal</option>
                    </select>
                  </div>
                  <div className="acciones">
                    <button type="submit">
                      <i className="icono bx bxs-check-circle"></i>
                    </button>
                    <a href="cerrar">
                      <i className="icono bx bxs-x-circle"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="paciente col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="icono bx bx-male-sign"></i>
                <h3 className="nombre"><a href="marcar">Manuel</a></h3>
                <i className="icono bx bx-bed"></i>
              </div>
              <ul className="datos-paciente list-group list-group-flush">
                <li className="list-group-item">
                  <i className="icono bx bxs-watch"></i> Edad: 25
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bx-calendar"></i> Días de ingreso: 3
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bxs-pizza"></i> Dieta: Baja en fibra
                        </li>
              </ul>
              <div className="botonera">
                <a href="modificar-edad" title="Modificar edad"><i className="icono bx bxs-watch"></i></a>
                <a href="modificar-dias" title="Modificar días de ingreso"><i className="icono bx bx-calendar"></i></a>
                <a href="modificar-dieta" title="Modificar dieta"><i className="icono bx bxs-pizza"></i></a>
                <form className="form-inline" hidden>
                  <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="edad">Días: </label>
                    <input type="number" id="dias-ingreso" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="dieta">Dieta: </label>
                    <select id="dieta" className="form-control form-control-sm">
                      <option value="baja-en-fibra">Baja en fibra</option>
                      <option value="baja-en-fibra">Diabetes</option>
                      <option value="baja-en-fibra">Sin sal</option>
                    </select>
                  </div>
                  <div className="acciones">
                    <button type="submit">
                      <i className="icono bx bxs-check-circle"></i>
                    </button>
                    <a href="cerrar">
                      <i className="icono bx bxs-x-circle"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="paciente col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="icono bx bx-male-sign"></i>
                <h3 className="nombre"><a href="marcar">Manuel</a></h3>
                <i className="icono bx bx-bed"></i>
              </div>
              <ul className="datos-paciente list-group list-group-flush">
                <li className="list-group-item">
                  <i className="icono bx bxs-watch"></i> Edad: 25
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bx-calendar"></i> Días de ingreso: 3
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bxs-pizza"></i> Dieta: Baja en fibra
                        </li>
              </ul>
              <div className="botonera">
                <a href="modificar-edad" title="Modificar edad"><i className="icono bx bxs-watch"></i></a>
                <a href="modificar-dias" title="Modificar días de ingreso"><i className="icono bx bx-calendar"></i></a>
                <a href="modificar-dieta" title="Modificar dieta"><i className="icono bx bxs-pizza"></i></a>
                <form className="form-inline" hidden>
                  <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="edad">Días: </label>
                    <input type="number" id="dias-ingreso" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="dieta">Dieta: </label>
                    <select id="dieta" className="form-control form-control-sm">
                      <option value="baja-en-fibra">Baja en fibra</option>
                      <option value="baja-en-fibra">Diabetes</option>
                      <option value="baja-en-fibra">Sin sal</option>
                    </select>
                  </div>
                  <div className="acciones">
                    <button type="submit">
                      <i className="icono bx bxs-check-circle"></i>
                    </button>
                    <a href="cerrar">
                      <i className="icono bx bxs-x-circle"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </li>
          <li className="paciente col-xs-12 col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header">
                <i className="icono bx bx-male-sign"></i>
                <h3 className="nombre"><a href="marcar">Manuel</a></h3>
                <i className="icono bx bx-bed"></i>
              </div>
              <ul className="datos-paciente list-group list-group-flush">
                <li className="list-group-item">
                  <i className="icono bx bxs-watch"></i> Edad: 25
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bx-calendar"></i> Días de ingreso: 3
                        </li>
                <li className="list-group-item">
                  <i className="icono bx bxs-pizza"></i> Dieta: Baja en fibra
                        </li>
              </ul>
              <div className="botonera">
                <a href="modificar-edad" title="Modificar edad"><i className="icono bx bxs-watch"></i></a>
                <a href="modificar-dias" title="Modificar días de ingreso"><i className="icono bx bx-calendar"></i></a>
                <a href="modificar-dieta" title="Modificar dieta"><i className="icono bx bxs-pizza"></i></a>
                <form className="form-inline" hidden>
                  <div className="form-group">
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="edad">Días: </label>
                    <input type="number" id="dias-ingreso" className="form-control form-control-sm" />
                  </div>
                  <div className="form-group" hidden>
                    <label htmlFor="dieta">Dieta: </label>
                    <select id="dieta" className="form-control form-control-sm">
                      <option value="baja-en-fibra">Baja en fibra</option>
                      <option value="baja-en-fibra">Diabetes</option>
                      <option value="baja-en-fibra">Sin sal</option>
                    </select>
                  </div>
                  <div className="acciones">
                    <button type="submit">
                      <i className="icono bx bxs-check-circle"></i>
                    </button>
                    <a href="cerrar">
                      <i className="icono bx bxs-x-circle"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
