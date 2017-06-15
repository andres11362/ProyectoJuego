<?php include 'include/header.php'; ?>
            <script src="js/jquery-3.2.1.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/juegos/memory.js"></script>
            <link rel="stylesheet" href="css/memory.css">
         </head>
<body>
<div class="container">
<div id="aviso-movil-horizontal">
    <h1>Por favor, coloca tu móvil en horizontal.</h1>
</div>
<div id="wrapper">
    <div class="page-header" id="tit-cen">
        <h1>CONCENTRESE</h1>
    </div>
        <div id="picbox">
           <span id="boxbuttons">
             <span class="button">
               <span id="counter">0</span>
               Intentos
             </span>
             <span class="button">
               <a onclick="ResetGame();">Reiniciar</a>
             </span>
           </span>
           <div id="boxcard"></div>
         </div>
         <a href="index" class="btn btn-default hidden" id="index">Volver</a>
    </div>
</div>
<?php include 'include/footer.php'; ?>

