<%-- Document : index Created on : Aug 30, 2019, 3:47:17 PM Author : Malte --%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <!-- meta tags -->
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Malte Magnussen</title>

    <!--The following tag is the JSTL Expression Language tag-->
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

    <!-- Insert bootstrap CSS - integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" -->
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      rel="stylesheet"
      crossorigin="anonymous"
    />

    <!-- Background stylesheet -->
    <link href="css/BackgroundImage.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <!-- Page Content -->
    <div class="container">
      <div class="card border-0 shadow my-5">
        <div class="card-body p-5">
          <h1 class="font-weight-light">Malte Hviid-Magnussen</h1>

          <div class="card-deck">
            <!-- COURSE ASSIGNMENT 1 -->
            <div class="card shadow">
              <a href="https://runivn.dk/CA-1/">
                <img
                  src="https://i.postimg.cc/Xv8ZDFhc/image.png"
                  class="card-img-top"
                  alt="Course Assignment 1 Crutch photo"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">Course Assignment 1</h5>
                <p class="card-text">
                  <a
                    href="https://docs.google.com/document/d/12hKo2N_VAHISCKVAxdqMpeiKGDSJajBzHJ182bHUdPU/edit"
                    >Description</a
                  >
                  of the Assignment
                  <br />
                  <a href="https://github.com/Runi-VN/CA-1">GitHub</a> for the
                  Project
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">September 2019</small>
              </div>
            </div>
            <!-- COURSE ASSIGNMENT 2 -->
            <div class="card shadow">
              <a href="https://holdkrykke.surge.sh">
                <img
                  src="https://i.postimg.cc/L628Ghtx/image.png"
                  class="card-img-top"
                  alt="Course Assignment 2 Coffe photo"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">Course Assignment 2</h5>
                <p class="card-text">
                  <a
                    href="https://docs.google.com/document/d/1KwvtlWjx-FINtFSUfkybmThiOaHmSonQgOhssf3hkdU/edit"
                    >Description</a
                  >
                  of the Assignment
                  <br />
                  <a href="https://github.com/MalteMagnussen/CA2">Backend</a>
                  GitHub of the Project
                  <br />
                  <a href="https://github.com/MalteMagnussen/CA2-FrontEnd"
                    >FrontEnd</a
                  >
                  GitHub of the Project
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">October 2019</small>
              </div>
            </div>
          </div>
          <br />
          <div class="card-deck">
            <!-- MY GITHUB ACCOUNT -->
            <div class="card shadow">
              <a href="https://github.com/MalteMagnussen">
                <img
                  src="https://i.imgur.com/qaDtYoL.png?1"
                  class="card-img-top"
                  alt="My GitHub Account photo"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">My GitHub Account</h5>
                <p class="card-text">You can find all my projects here.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Since 2018</small>
              </div>
            </div>
            <!-- COPERNICUS -->
            <div class="card shadow">
              <a href="https://maltemagnussen.com/copernicus/map.html">
                <img
                  src="images/EUAvg2018100m.png"
                  class="card-img-top"
                  style="width:100%;height:100%;"
                  alt="Copernicus data"
                />
              </a>
              <div class="card-body">
                <h5 class="card-title">Copernicus Hackathon Mockup</h5>
                <p class="card-text">
                  Made by August A. Zachariae, Malte Magnussen, Andreas Stokholm
                  at Copernicus Hackathon 25-27 October 2019
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">October 2018</small>
              </div>
            </div>
          </div>
          <div style="height: 700px"></div>
        </div>
      </div>
    </div>
    <!-- JQUERY JS -->
    <script
      src="https://code.jquery.com/jquery-3.4.0.min.js"
      crossorigin="anonymous"
    ></script>
    <!-- BOOTSTRAP JS -->
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
