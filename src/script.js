// Set the date we're counting down to
var countDownDate = new Date("July 28,2023 5:15:56").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h:"
  + minutes + "m:" + seconds + "s";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

document.getElementById('nav-toggle').onclick = function() {
  document.getElementById("nav-bar").classList.toggle("hidden");
}

var icon = document.getElementById('faq-icon');
var faq1 = document.getElementById('general-faq');
var svgplus = document.getElementById('svg-plus');
const svgminus = document.getElementById('svg-min').classList;

const svgprereqp = document.getElementById('svg-plus-prereq').classList;
const svgprereqm = document.getElementById('svg-min-prereq').classList;

const svgprereqp2 = document.getElementById('svg-plus-prereq-2').classList;
const svgprereqm2 = document.getElementById('svg-min-prereq-2').classList;

const svgexamp = document.getElementById('svg-plus-exam').classList;
const svgexamm = document.getElementById('svg-min-exam').classList;

const svgexamp2 = document.getElementById('svg-plus-exam-2').classList;
const svgexamm2 = document.getElementById('svg-min-exam-2').classList;

const svgexamp3 = document.getElementById('svg-plus-exam-3').classList;
const svgexamm3 = document.getElementById('svg-min-exam-3').classList;

const svgbootp = document.getElementById('svg-plus-boot').classList;
const svgbootm = document.getElementById('svg-min-boot').classList;

const svgbootp2 = document.getElementById('svg-plus-boot-2').classList;
const svgbootm2 = document.getElementById('svg-min-boot-2').classList;

const svgbootp3 = document.getElementById('svg-plus-boot-3').classList;
const svgbootm3 = document.getElementById('svg-min-boot-3').classList;

const svgselfp = document.getElementById('svg-plus-self').classList;
const svgselfm = document.getElementById('svg-min-self').classList;

const svgselfp2 = document.getElementById('svg-plus-self-2').classList;
const svgselfm2 = document.getElementById('svg-min-self-2').classList;

const svgselfp3 = document.getElementById('svg-plus-self-3').classList;
const svgselfm3 = document.getElementById('svg-min-self-3').classList;

const svgpayp = document.getElementById('svg-plus-pay').classList;
const svgpaym = document.getElementById('svg-min-pay').classList;

const svgpayp2 = document.getElementById('svg-plus-pay-2').classList;
const svgpaym2 = document.getElementById('svg-min-pay-2').classList;

const svgpayp3 = document.getElementById('svg-plus-pay-3').classList;
const svgpaym3 = document.getElementById('svg-min-pay-3').classList;

const svgpayp4 = document.getElementById('svg-plus-pay-4').classList;
const svgpaym4 = document.getElementById('svg-min-pay-4').classList;

const svgpayp5 = document.getElementById('svg-plus-pay-5').classList;
const svgpaym5 = document.getElementById('svg-min-pay-5').classList;

const svgpayp6 = document.getElementById('svg-plus-pay-6').classList;
const svgpaym6 = document.getElementById('svg-min-pay-6').classList;

const svgpayp7 = document.getElementById('svg-plus-pay-7').classList;
const svgpaym7 = document.getElementById('svg-min-pay-7').classList;

const svgprep2 = document.getElementById('svg-plus-pre-2').classList;
const svgprem2 = document.getElementById('svg-min-pre-2').classList;

const svgprep3 = document.getElementById('svg-plus-pre-3').classList;
const svgprem3 = document.getElementById('svg-min-pre-3').classList;

const svgprep = document.getElementById('svg-plus-pre').classList;
const svgprem = document.getElementById('svg-min-pre').classList;

const icnclasslist = icon.classList;
const icn2 = document.getElementById('faq-icon-2').classList;
const icn3 = document.getElementById('faq-icon-3').classList;
const icn4 = document.getElementById('faq-icon-4').classList;
const icn5 = document.getElementById('faq-icon-5').classList;
const icn6 = document.getElementById('faq-icon-6').classList;
const icn7 = document.getElementById('faq-icon-7').classList;

const faq1classlist = faq1.classList; 
const svgplusclasslist = svgplus.classList;
const svgplus2 = document.getElementById('svg-plus-2').classList;
const svgminus2 = document.getElementById('svg-min-2').classList;
const svgplus3 = document.getElementById('svg-plus-3').classList;
const svgminus3 = document.getElementById('svg-min-3').classList;
const svgplus4 = document.getElementById('svg-plus-4').classList;
const svgminus4 = document.getElementById('svg-min-4').classList;
const svgplus5 = document.getElementById('svg-plus-5').classList;
const svgminus5 = document.getElementById('svg-min-5').classList;
const svgplus6 = document.getElementById('svg-plus-6').classList;
const svgminus6 = document.getElementById('svg-min-6').classList;

const faqmd1 = document.getElementById('faq-md-1').classList;
const queg1 = document.getElementById('faq-1-1').classList;

const faqmd2 = document.getElementById('faq-md-2').classList;
const queg2 = document.getElementById('faq-1-2').classList;

const faqmd3 = document.getElementById('faq-md-3').classList;
const queg3 = document.getElementById('faq-1-3').classList;

const faqmd4 = document.getElementById('faq-md-4').classList;
const queg4 = document.getElementById('faq-1-4').classList;

const faqmd5 = document.getElementById('faq-md-5').classList;
const queg5 = document.getElementById('faq-1-5').classList;

const faqmd6 = document.getElementById('faq-md-6').classList;
const queg6 = document.getElementById('faq-1-6').classList;

var prefaq = document.getElementById('preorder-faq');
const prefaqclasslist = prefaq.classList;

const faqmdpre1 = document.getElementById('faq-md-pre-1').classList;
const quep1 = document.getElementById('faq-2-1').classList;

const faqmdpre2 = document.getElementById('faq-md-pre-2').classList;
const quep2 = document.getElementById('faq-2-2').classList;

const faqmdpre3 = document.getElementById('faq-md-pre-3').classList;
const quep3 = document.getElementById('faq-2-3').classList;

var payfaq = document.getElementById('payment-faq');
const payfaqclasslist = payfaq.classList;

const faqmdpay1 = document.getElementById('faq-md-pay-1').classList;
const quepy1 = document.getElementById('faq-3-1').classList;

const faqmdpay2 = document.getElementById('faq-md-pay-2').classList;
const quepy2 = document.getElementById('faq-3-2').classList;

const faqmdpay3 = document.getElementById('faq-md-pay-3').classList;
const quepy3 = document.getElementById('faq-3-3').classList;

const faqmdpay4 = document.getElementById('faq-md-pay-4').classList;
const quepy4 = document.getElementById('faq-3-4').classList;

const faqmdpay5 = document.getElementById('faq-md-pay-5').classList;
const quepy5 = document.getElementById('faq-3-5').classList;

const faqmdpay6 = document.getElementById('faq-md-pay-6').classList;
const quepy6 = document.getElementById('faq-3-6').classList;

const faqmdpay7 = document.getElementById('faq-md-pay-7').classList;
const quepy7 = document.getElementById('faq-3-7').classList;

var selffaq = document.getElementById('self-faq');
const selffaqclasslist = selffaq.classList;

const faqmdself1 = document.getElementById('faq-md-self-1').classList;
const quese1 = document.getElementById('faq-4-1').classList;

const faqmdself2 = document.getElementById('faq-md-self-2').classList;
const quese2 = document.getElementById('faq-4-2').classList;

const faqmdself3 = document.getElementById('faq-md-self-3').classList;
const quese3 = document.getElementById('faq-4-3').classList;

var bootfaq = document.getElementById('bootcamp-faq');
const bootfaqclasslist = bootfaq.classList;

const faqmdboot1 = document.getElementById('faq-md-boot-1').classList;
const queb1 = document.getElementById('faq-5-1').classList;

const faqmdboot2 = document.getElementById('faq-md-boot-2').classList;
const queb2 = document.getElementById('faq-5-2').classList;

const faqmdboot3 = document.getElementById('faq-md-boot-3').classList;
const queb3 = document.getElementById('faq-5-3').classList;

var examfaq = document.getElementById('exam-faq');
const examfaqclasslist = examfaq.classList;

const faqmdexam1 = document.getElementById('faq-md-exam-1').classList;
const quee1 = document.getElementById('faq-6-1').classList;

const faqmdexam2 = document.getElementById('faq-md-exam-2').classList;
const quee2 = document.getElementById('faq-6-2').classList;

const faqmdexam3 = document.getElementById('faq-md-exam-3').classList;
const quee3 = document.getElementById('faq-6-3').classList;

var prereqfaq = document.getElementById('prereq-faq');
const prereqfaqclasslist = prereqfaq.classList;

const faqmdprereq1 = document.getElementById('faq-md-prereq-1').classList;
const queprereq1 = document.getElementById('faq-7-1').classList;

const faqmdprereq2 = document.getElementById('faq-md-prereq-2').classList;
const queprereq2 = document.getElementById('faq-7-2').classList;


function showfaq(){
  icnclasslist.toggle("-rotate-180");
  faq1classlist.toggle("hidden");
}
function showfaq2(){
  prefaqclasslist.toggle("hidden");
  icn2.toggle("-rotate-180");
}
function showfaq3(){
  payfaqclasslist.toggle("hidden");
  icn3.toggle("-rotate-180");
}
function showfaq4(){
  selffaqclasslist.toggle("hidden");
  icn4.toggle("-rotate-180");
}
function showfaq5(){
  bootfaqclasslist.toggle("hidden");
  icn5.toggle("-rotate-180");
}
function showfaq6(){
  examfaqclasslist.toggle("hidden");
  icn6.toggle("-rotate-180");
}
function showfaq7(){
  prereqfaqclasslist.toggle("hidden");
  icn7.toggle("-rotate-180");
}

function faqinner(){
  svgplusclasslist.toggle("hidden");
  svgminus.toggle("hidden");
  faqmd1.toggle("hidden");
  queg1.toggle("text-mint");
}

function faqinner2(){
  svgplus2.toggle("hidden");
  svgminus2.toggle("hidden");
  faqmd2.toggle("hidden");
  queg2.toggle("text-mint");
}

function faqinner3(){
  svgplus3.toggle("hidden");
  svgminus3.toggle("hidden");
  faqmd3.toggle("hidden");
  queg3.toggle("text-mint");
}
function faqinner4(){
  svgplus4.toggle("hidden");
  svgminus4.toggle("hidden");
  faqmd4.toggle("hidden");
  queg4.toggle("text-mint");
}
function faqinner5(){
  svgplus5.toggle("hidden");
  svgminus5.toggle("hidden");
  faqmd5.toggle("hidden");
  queg5.toggle("text-mint");
}

function faqinner6(){
  svgplus6.toggle("hidden");
  svgminus6.toggle("hidden");
  faqmd6.toggle("hidden");
  queg6.toggle("text-mint");
}

function faqpreinner(){
  svgprep.toggle("hidden");
  svgprem.toggle("hidden");
  faqmdpre1.toggle("hidden");
  quep1.toggle("text-mint");
}

function faqpreinner2(){
  svgprep2.toggle("hidden");
  svgprem2.toggle("hidden");
  faqmdpre2.toggle("hidden");
  quep2.toggle("text-mint");
}

function faqpreinner3(){
  svgprep3.toggle("hidden");
  svgprem3.toggle("hidden");
  faqmdpre3.toggle("hidden");
  quep3.toggle("text-mint");
}

function faqpayinner(){
  svgpayp.toggle("hidden");
  svgpaym.toggle("hidden");
  faqmdpay1.toggle("hidden");
  quepy1.toggle("text-mint");
}

function faqpayinner2(){
  svgpayp2.toggle("hidden");
  svgpaym2.toggle("hidden");
  faqmdpay2.toggle("hidden");
  quepy2.toggle("text-mint");
}
function faqpayinner3(){
  svgpayp3.toggle("hidden");
  svgpaym3.toggle("hidden");
  faqmdpay3.toggle("hidden");
  quepy3.toggle("text-mint");
}
function faqpayinner4(){
  svgpayp4.toggle("hidden");
  svgpaym4.toggle("hidden");
  faqmdpay4.toggle("hidden");
  quepy4.toggle("text-mint");
}
function faqpayinner5(){
  svgpayp5.toggle("hidden");
  svgpaym5.toggle("hidden");
  faqmdpay5.toggle("hidden");
  quepy5.toggle("text-mint");
}
function faqpayinner6(){
  svgpayp6.toggle("hidden");
  svgpaym6.toggle("hidden");
  faqmdpay6.toggle("hidden");
  quepy6.toggle("text-mint");
}
function faqpayinner7(){
  svgpayp7.toggle("hidden");
  svgpaym7.toggle("hidden");
  faqmdpay7.toggle("hidden");
  quepy7.toggle("text-mint");
}

function faqselfinner(){
  svgselfp.toggle("hidden");
  svgselfm.toggle("hidden");
  faqmdself1.toggle("hidden");
  quese1.toggle("text-mint");
}

function faqselfinner2(){
  svgselfp2.toggle("hidden");
  svgselfm2.toggle("hidden");
  faqmdself2.toggle("hidden");
  quese2.toggle("text-mint");
}

function faqselfinner3(){
  svgselfp3.toggle("hidden");
  svgselfm3.toggle("hidden");
  faqmdself3.toggle("hidden");
  quese3.toggle("text-mint");
}

function faqbootinner(){
  svgbootp.toggle("hidden");
  svgbootm.toggle("hidden");
  faqmdboot1.toggle("hidden");
  queb1.toggle("text-mint");
}

function faqbootinner2(){
  svgbootp2.toggle("hidden");
  svgbootm2.toggle("hidden");
  faqmdboot2.toggle("hidden");
  queb2.toggle("text-mint");
}

function faqbootinner3(){
  svgbootp3.toggle("hidden");
  svgbootm3.toggle("hidden");
  faqmdboot3.toggle("hidden");
  queb3.toggle("text-mint");
}

function faqexaminner(){
  svgexamp.toggle("hidden");
  svgexamm.toggle("hidden");
  faqmdexam1.toggle("hidden");
  quee1.toggle("text-mint");
}

function faqexaminner2(){
  svgexamp2.toggle("hidden");
  svgexamm2.toggle("hidden");
  faqmdexam2.toggle("hidden");
  quee2.toggle("text-mint");
}

function faqexaminner3(){
  svgexamp3.toggle("hidden");
  svgexamm3.toggle("hidden");
  faqmdexam3.toggle("hidden");
  quee3.toggle("text-mint");
}

function faqprereqinner(){
  svgprereqp.toggle("hidden");
  svgprereqm.toggle("hidden");
  faqmdprereq1.toggle("hidden");
  queprereq1.toggle("text-mint");
}

function faqprereqinner2(){
  svgprereqp2.toggle("hidden");
  svgprereqm2.toggle("hidden");
  faqmdprereq2.toggle("hidden");
  queprereq2.toggle("text-mint");
}


function hideborder(){
  var dev = document.getElementById('developer');
  var devtxt = document.getElementById('dev-txt');
  var senior = document.getElementById('senior-dev');
  var seniortxt = document.getElementById('senior-txt');
  dev.classList.toggle('bg-none');
  devtxt.classList.toggle('bg-none');
  devtxt.classList.toggle('text-[#53565e]');
  senior.classList.toggle('bg-none');
  senior.classList.toggle('bg-gradient-to-r');
  seniortxt.classList.toggle('bg-gradient-to-r');
  seniortxt.classList.toggle('text-[#53565e]');
  seniortxt.classList.remove('bg-none')
}