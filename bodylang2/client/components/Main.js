<!DOCTYPE html>
<html>
<title>Body Language</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open Sans">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="/components/css/App.css">

<body class="w3-light-grey">


    <div class="w3-bar w3-black w3-hide-small">
        <a href="#" class="w3-bar-item w3-button">
            <i class="fa fa-facebook-official"></i>
        </a>
        <a href="#" class="w3-bar-item w3-button">
            <i class="fa fa-instagram"></i>
        </a>
        <a href="#" class="w3-bar-item w3-button">
            <i class="fa fa-twitter"></i>
        </a>
        <a href="#" class="w3-bar-item w3-button">
            <i class="fa fa-linkedin"></i>
        </a>
        <button class="w3-bar-item w3-button w3-right" onclick="document.getElementById('id01').style.display='block'" style="width:auto;"><i class="fa fa-male"></i></button>
    </div>

 
    <div class="w3-content" style="max-width:1600px">


        <header class="w3-container w3-center w3-padding-48 bl-top">
            <h1 class="w3-xxxlarge">
                <b><img class="logo w3-center" src="../public/assets/img/BLLogo-1.png"></img></b>
            </h1>
            <h6>Show your emotions
                <span class="w3-tag">Through text</span>
            </h6>
        </header>

     
         <header class="w3-row w3-display-container w3-wide" id="home">
             <div class="w3-display-left w3-padding-large w3-white banner">
                <h1 class="w3-text-grey title">Body</h1>
                <h1 class="w3-jumbo w3-text-grey w3-hide-small title">
                    <b>Language</b>
                </h1>
            </div>
        </header> 

        <div class="w3-row w3-padding w3-border">

          
            <div class="w3-col l8 s12">

                <div class="w3-container w3-white w3-margin w3-padding-large">
                        <div class="w3-display w3-padding-large w3-white banner">
                                <h1 class="w3-text-grey title">Body</h1>
                                <h1 class="w3-jumbo w3-text-grey w3-hide-small title">
                                    <b>Language</b>
                                </h1>
                            </div>
                    

                    <div class="w3-justify">
                        
                        <App />
                     
                <div class="w3-margin">
                        <h4 style="color:#0fa7f6"><img src="../public/assets/img/BLGlyphy.png" alt="BL" class="w3-grayscale">Who we are</h4>
                        <div class="w3-container" id="bl-wwa">
                        <p>Just four people trying to get an idea together. We hope to see this grow into something useful for people when communicating via text.</p>
                        </div>
                </div>
                <hr>

                <div class="w3-white w3-margin">
                    <div class="w3-container w3-padding w3-black">
                        <h4>Your Recent Emotions</h4>
                    </div>
                    <ul class="w3-ul w3-hoverable">
                        <li id="span1" class="w3-padding-16">
                            
                            <span>Happy</span>
                        </li>
                        <li id="span2" class="w3-padding-16">
                           
                            <span>Happy</span>
                        </li>
                        <li id="span3" class="w3-padding-16">
                            
                            <span>Mad</span>
                        </li>
                        <li id="span4" class="w3-padding-16">
                           
                            <span>Angry</span>
                        </li>
                    </ul>
                </div>
                <div class="w3-white w3-margin">
                    <div class="w3-container w3-padding w3-black">
                        <h4>Follow Us</h4>
                    </div>
                    <div class="w3-container w3-xlarge w3-padding">
                        <i class="fa fa-facebook-official w3-hover-opacity"></i>
                        <i class="fa fa-instagram w3-hover-opacity"></i>
                        <i class="fa fa-twitter w3-hover-opacity"></i>
                        <i class="fa fa-linkedin w3-hover-opacity"></i>
                    </div>
                </div>
        </div>    
    </div>


    <!-- Footer -->
    <footer class="w3-container w3-dark-grey" style="padding:32px">
        <a href="#" class="w3-button w3-black w3-padding-large w3-margin-bottom">
            <i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
    </footer>