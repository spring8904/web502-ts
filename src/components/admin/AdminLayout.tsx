import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { useEffect } from 'react'

const AdminLayout = () => {
  useEffect(() => {
    document.title = 'Dashboard'
    document.body.classList.add('hold-transition', 'sidebar-mini')
  }, [])

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
      />
      <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css" />

      <link rel="stylesheet" href="/dist/css/adminlte.min.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 mt-3">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AdminLayout
