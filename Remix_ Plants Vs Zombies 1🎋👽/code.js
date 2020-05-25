var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9b80d5b8-7d4b-4313-93b3-10131bfc8793","72fcd758-096b-46ac-9562-c8330645b2a3","6a7ea179-bb11-4584-b86e-cee71e95b72d","c767652c-edbf-43ba-8daf-1189c59461d4","c155b498-7e37-4523-8008-61b3565d7a5d","b3f77ff8-cd09-489c-a47a-e5791a014f7a","a8bcc636-809f-400e-a4d6-dfa6f7ac7db6","d9205290-6024-4b50-8516-abc69757bdbb","cdf67aea-6d68-42f1-83f6-2f8f945c85e1","d1507622-5596-4810-99a5-c63632231258","0a65f8af-dbd4-45a6-983e-96cab5c232e2","30282731-ebb4-40b2-ac7e-d661aaa7d157","3639f7d5-108e-43ce-9922-fb4da144ec3e","a5be3253-5146-4159-b6f7-dba340538add","671cc45c-4166-40e9-8c32-a6f344507b8b","ef525776-36a2-482a-9368-93ad4ae56698","c50b3774-d546-4b1a-8dbd-68f5d7e7d5ec","90380e49-4b86-4bf3-9b42-e02a974a4e2a","5a18498c-a863-41eb-95db-057064f2a145","8a05c24c-2bc5-4d97-883d-d7467fba9ec6","6c39c98e-3d26-43f8-96ab-87b81465864e","ea180a28-3a0c-4ed9-a626-25da593e6082","03bd4c07-48a8-487a-b52a-e1ef0071ca5a","3be70458-75f0-4620-b615-868812af9076","be523e31-6bc6-4f10-8968-d60f05c48d23","26961ee2-5d73-4743-9c8a-898808792ae2","32e8e7c0-0357-4f56-b398-b2792b11a7d0","fa053757-29a6-4204-a621-fb6d4e973afd","cb2116e3-48dd-425e-89f9-ac4345f9b6d2","bb393338-2716-41ca-98a3-8855c9f7d49e","058c8928-de57-4b4f-9417-5253f8a47d6f","881a80f3-ed0e-4d63-836f-b1807ff104e1","f09f5db2-7567-4d51-a784-08f7b60b937e","ffd3b6a8-4ce1-4996-818c-28abde6527f9","82365418-cc89-4532-adfa-9043f53cad6f"],"propsByKey":{"9b80d5b8-7d4b-4313-93b3-10131bfc8793":{"name":"Fondo1","sourceUrl":null,"frameSize":{"x":400,"y":350},"frameCount":1,"looping":true,"frameDelay":12,"version":"Pdkisdb0jtivMbNBCeXyxtgtzweO__lr","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":350},"rootRelativePath":"assets/9b80d5b8-7d4b-4313-93b3-10131bfc8793.png"},"72fcd758-096b-46ac-9562-c8330645b2a3":{"name":"Fondo2","sourceUrl":null,"frameSize":{"x":400,"y":350},"frameCount":1,"looping":true,"frameDelay":12,"version":"UxSbLIzSI1myhgJjxcmFhhGn7H0Qb9SN","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":350},"rootRelativePath":"assets/72fcd758-096b-46ac-9562-c8330645b2a3.png"},"6a7ea179-bb11-4584-b86e-cee71e95b72d":{"name":"Lanzaguisantes","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":7,"looping":true,"frameDelay":5,"version":"6PeAJktish25AgBxW4Avl02.e7tmuvC5","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":90},"rootRelativePath":"assets/6a7ea179-bb11-4584-b86e-cee71e95b72d.png"},"c767652c-edbf-43ba-8daf-1189c59461d4":{"name":"Zombi","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":4,"looping":true,"frameDelay":12,"version":"_LQlaB.LXVD.JvfESGHiGyxH0xM4_Lw5","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/c767652c-edbf-43ba-8daf-1189c59461d4.png"},"c155b498-7e37-4523-8008-61b3565d7a5d":{"name":"Caracono","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":4,"looping":true,"frameDelay":20,"version":"l1mDpzBX3WpScM8DU1W_6m0buqWRFpiJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/c155b498-7e37-4523-8008-61b3565d7a5d.png"},"b3f77ff8-cd09-489c-a47a-e5791a014f7a":{"name":"ZombiCaminando","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":5,"looping":true,"frameDelay":12,"version":"8piGOFiSkl4iF98.vs_hMQp5H30QJRql","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":240},"rootRelativePath":"assets/b3f77ff8-cd09-489c-a47a-e5791a014f7a.png"},"a8bcc636-809f-400e-a4d6-dfa6f7ac7db6":{"name":"CaraconoCaminando","sourceUrl":null,"frameSize":{"x":89,"y":80},"frameCount":5,"looping":true,"frameDelay":12,"version":"zMOH5dBZypv_YCba4EydE8w2HlAexGsl","loadedFromSource":true,"saved":true,"sourceSize":{"x":178,"y":240},"rootRelativePath":"assets/a8bcc636-809f-400e-a4d6-dfa6f7ac7db6.png"},"d9205290-6024-4b50-8516-abc69757bdbb":{"name":"CaraconoComiendo","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":4,"looping":true,"frameDelay":5,"version":"aO6PH.5XfmbR8IArf.e7qcW7ZFHS61Rv","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/d9205290-6024-4b50-8516-abc69757bdbb.png"},"cdf67aea-6d68-42f1-83f6-2f8f945c85e1":{"name":"ZombiComiendo","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":4,"looping":true,"frameDelay":5,"version":"xtfiyP.gqfR_VxpNNrdjuzPJeXm3d_7C","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/cdf67aea-6d68-42f1-83f6-2f8f945c85e1.png"},"d1507622-5596-4810-99a5-c63632231258":{"name":"Guisante","sourceUrl":null,"frameSize":{"x":16,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"rZBYqm0SrtJ2bFitBBYMGAiVEfel5znJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":17},"rootRelativePath":"assets/d1507622-5596-4810-99a5-c63632231258.png"},"0a65f8af-dbd4-45a6-983e-96cab5c232e2":{"name":"ZombiMuriendo","sourceUrl":null,"frameSize":{"x":80,"y":80},"frameCount":3,"looping":false,"frameDelay":12,"version":"JiddowmReWFAjqrXqYocchgE7Vmqdq8M","loadedFromSource":true,"saved":true,"sourceSize":{"x":160,"y":160},"rootRelativePath":"assets/0a65f8af-dbd4-45a6-983e-96cab5c232e2.png"},"30282731-ebb4-40b2-ac7e-d661aaa7d157":{"name":"Girasol","sourceUrl":null,"frameSize":{"x":35,"y":33},"frameCount":8,"looping":true,"frameDelay":5,"version":".lS.XXANJerB3STtAlQWG.fwkOS6C5YG","loadedFromSource":true,"saved":true,"sourceSize":{"x":105,"y":99},"rootRelativePath":"assets/30282731-ebb4-40b2-ac7e-d661aaa7d157.png"},"3639f7d5-108e-43ce-9922-fb4da144ec3e":{"name":"Sol","sourceUrl":null,"frameSize":{"x":26,"y":56},"frameCount":13,"looping":false,"frameDelay":1,"version":"HZkOoqqI5wY5ofq1Ea5_mWBga1zKY55X","loadedFromSource":true,"saved":true,"sourceSize":{"x":130,"y":168},"rootRelativePath":"assets/3639f7d5-108e-43ce-9922-fb4da144ec3e.png"},"a5be3253-5146-4159-b6f7-dba340538add":{"name":"SolCayente","sourceUrl":null,"frameSize":{"x":26,"y":25},"frameCount":2,"looping":true,"frameDelay":15,"version":"1Mb2UqA_D9_Y7DJYQOCV82NUC9ZkrmVr","loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":50},"rootRelativePath":"assets/a5be3253-5146-4159-b6f7-dba340538add.png"},"671cc45c-4166-40e9-8c32-a6f344507b8b":{"name":"SemillaGirasol","sourceUrl":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/671cc45c-4166-40e9-8c32-a6f344507b8b.png","frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"5w7mlhlXeG5wFYl.duulxNUKzY_5hymc","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/671cc45c-4166-40e9-8c32-a6f344507b8b.png"},"ef525776-36a2-482a-9368-93ad4ae56698":{"name":"SeedBank.png_1","sourceUrl":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/ef525776-36a2-482a-9368-93ad4ae56698.png","frameSize":{"x":446,"y":87},"frameCount":1,"looping":true,"frameDelay":4,"version":"jIzzukeuvFd7yxcwLNfaILy.ZSisw6S9","loadedFromSource":true,"saved":true,"sourceSize":{"x":446,"y":87},"rootRelativePath":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/ef525776-36a2-482a-9368-93ad4ae56698.png"},"c50b3774-d546-4b1a-8dbd-68f5d7e7d5ec":{"name":"SemillaLanzaguisantes","sourceUrl":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/c50b3774-d546-4b1a-8dbd-68f5d7e7d5ec.png","frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"8cqFlDKMJHyjF47JDTSUGF.6gYHMvQVI","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/c50b3774-d546-4b1a-8dbd-68f5d7e7d5ec.png"},"90380e49-4b86-4bf3-9b42-e02a974a4e2a":{"name":"Petacereza","sourceUrl":null,"frameSize":{"x":50,"y":36},"frameCount":1,"looping":true,"frameDelay":12,"version":"atukw2LnY7id12WeD7h9pOsEsbjeAM7c","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":36},"rootRelativePath":"assets/90380e49-4b86-4bf3-9b42-e02a974a4e2a.png"},"5a18498c-a863-41eb-95db-057064f2a145":{"name":"Explosion","sourceUrl":null,"frameSize":{"x":94,"y":67},"frameCount":4,"looping":false,"frameDelay":4,"version":"v5wakZqovkXlrBe2vtNn7BHWzMZ33HSj","loadedFromSource":true,"saved":true,"sourceSize":{"x":188,"y":134},"rootRelativePath":"assets/5a18498c-a863-41eb-95db-057064f2a145.png"},"8a05c24c-2bc5-4d97-883d-d7467fba9ec6":{"name":"SemillaPetacereza","sourceUrl":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/8a05c24c-2bc5-4d97-883d-d7467fba9ec6.png","frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"gqe_cPlL99pLaSm4Rw_41dEFIfTw3euT","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/8a05c24c-2bc5-4d97-883d-d7467fba9ec6.png"},"6c39c98e-3d26-43f8-96ab-87b81465864e":{"name":"Lets rock.png_1","sourceUrl":null,"frameSize":{"x":106,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"4jF4Y2ULDed4yqCIrxvF7t2ZU9QA2j8u","loadedFromSource":true,"saved":true,"sourceSize":{"x":106,"y":33},"rootRelativePath":"assets/6c39c98e-3d26-43f8-96ab-87b81465864e.png"},"ea180a28-3a0c-4ed9-a626-25da593e6082":{"name":"Nuez","sourceUrl":null,"frameSize":{"x":37,"y":36},"frameCount":4,"looping":true,"frameDelay":12,"version":"193zhbydXIrC24Z35xGna9UL5lH.p31K","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":72},"rootRelativePath":"assets/ea180a28-3a0c-4ed9-a626-25da593e6082.png"},"03bd4c07-48a8-487a-b52a-e1ef0071ca5a":{"name":"SemillaNuez","sourceUrl":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/03bd4c07-48a8-487a-b52a-e1ef0071ca5a.png","frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"dFc2RmM9v1upGElqmuAC1VbI7pL3BUVF","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/03bd4c07-48a8-487a-b52a-e1ef0071ca5a.png"},"3be70458-75f0-4620-b615-868812af9076":{"name":"Pertiga1Caminando","sourceUrl":null,"frameSize":{"x":102,"y":80},"frameCount":7,"looping":true,"frameDelay":5,"version":"n9El.HG6c4lp4F_C9TFajEUI6ihZWN6R","loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":320},"rootRelativePath":"assets/3be70458-75f0-4620-b615-868812af9076.png"},"be523e31-6bc6-4f10-8968-d60f05c48d23":{"name":"Pertiga1Saltando","sourceUrl":null,"frameSize":{"x":102,"y":86},"frameCount":5,"looping":false,"frameDelay":5,"version":"7yltslZxA7hfWCukxAsz6IFDltBjks0o","loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":258},"rootRelativePath":"assets/be523e31-6bc6-4f10-8968-d60f05c48d23.png"},"26961ee2-5d73-4743-9c8a-898808792ae2":{"name":"Pertiga3Caminando","sourceUrl":null,"frameSize":{"x":102,"y":80},"frameCount":7,"looping":true,"frameDelay":12,"version":"LYV9xhmWRjOpIkDBUkw.qzljJLpvu9u8","loadedFromSource":true,"saved":true,"sourceSize":{"x":204,"y":320},"rootRelativePath":"assets/26961ee2-5d73-4743-9c8a-898808792ae2.png"},"32e8e7c0-0357-4f56-b398-b2792b11a7d0":{"name":"Pertiga1Muriendo","sourceUrl":null,"frameSize":{"x":62,"y":80},"frameCount":5,"looping":false,"frameDelay":5,"version":"hoSwNqPXD5PUd2zPqSEZ0q_AWw1eFLSG","loadedFromSource":true,"saved":true,"sourceSize":{"x":186,"y":160},"rootRelativePath":"assets/32e8e7c0-0357-4f56-b398-b2792b11a7d0.png"},"fa053757-29a6-4204-a621-fb6d4e973afd":{"name":"Pertiga3Comiendo","sourceUrl":null,"frameSize":{"x":55,"y":80},"frameCount":7,"looping":true,"frameDelay":12,"version":"kwtBice7HVYn6hPJWL41az2h9KHbSixz","loadedFromSource":true,"saved":true,"sourceSize":{"x":165,"y":240},"rootRelativePath":"assets/fa053757-29a6-4204-a621-fb6d4e973afd.png"},"cb2116e3-48dd-425e-89f9-ac4345f9b6d2":{"name":"Pertiga1","sourceUrl":null,"frameSize":{"x":90,"y":80},"frameCount":1,"looping":true,"frameDelay":12,"version":"EphAKfMhaK6RT5MOKEjgA1JbMypcVwgE","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":80},"rootRelativePath":"assets/cb2116e3-48dd-425e-89f9-ac4345f9b6d2.png"},"bb393338-2716-41ca-98a3-8855c9f7d49e":{"name":"Pala","sourceUrl":null,"frameSize":{"x":70,"y":71},"frameCount":2,"looping":true,"frameDelay":12,"version":"DjWWeiRFPdfFJ1jFrM38U6MI2kA4ax3O","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":142},"rootRelativePath":"assets/bb393338-2716-41ca-98a3-8855c9f7d49e.png"},"058c8928-de57-4b4f-9417-5253f8a47d6f":{"name":"Patatapum","sourceUrl":null,"frameSize":{"x":37,"y":32},"frameCount":1,"looping":true,"frameDelay":12,"version":"5qvLwzjB6WRlX5pN1U_T0DowGAPfXQDL","loadedFromSource":true,"saved":true,"sourceSize":{"x":37,"y":32},"rootRelativePath":"assets/058c8928-de57-4b4f-9417-5253f8a47d6f.png"},"881a80f3-ed0e-4d63-836f-b1807ff104e1":{"name":"PatatapumArmada","sourceUrl":null,"frameSize":{"x":37,"y":32},"frameCount":4,"looping":true,"frameDelay":5,"version":"kfUiYMa3l9eTn8iTGXoR7R6Tu56WF6mM","loadedFromSource":true,"saved":true,"sourceSize":{"x":74,"y":64},"rootRelativePath":"assets/881a80f3-ed0e-4d63-836f-b1807ff104e1.png"},"f09f5db2-7567-4d51-a784-08f7b60b937e":{"name":"SemillaPatatapum","sourceUrl":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/f09f5db2-7567-4d51-a784-08f7b60b937e.png","frameSize":{"x":50,"y":70},"frameCount":1,"looping":true,"frameDelay":4,"version":"1LeNg9QpaI0mMJKmxu2XVlY3E0atSmgC","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":70},"rootRelativePath":"assets/v3/animations/cQcrYNFtpVUDonrRxWF3N9DNTkmCkvLaUbHrLGJB6kA/f09f5db2-7567-4d51-a784-08f7b60b937e.png"},"ffd3b6a8-4ce1-4996-818c-28abde6527f9":{"name":"Spudow","sourceUrl":null,"frameSize":{"x":180,"y":125},"frameCount":1,"looping":true,"frameDelay":12,"version":"zGxHvpwkvCZR3La91w.54Nsug2obElCI","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":125},"rootRelativePath":"assets/ffd3b6a8-4ce1-4996-818c-28abde6527f9.png"},"82365418-cc89-4532-adfa-9043f53cad6f":{"name":"Podadora","sourceUrl":null,"frameSize":{"x":60,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"uvz_K0UTYXjlzZQHORwgyxnyQWtgpChL","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":44},"rootRelativePath":"assets/82365418-cc89-4532-adfa-9043f53cad6f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

/*Data:
35 tics equals 1 second
*/

playSound("assets/Choose your seeds.mp3",true);
var progreso = 0;
var fondos = createGroup();
var nivelActual = 0;
var niveles = [
  ["W1000","Zombi","W1500","Zombi","W1000","Zombi","Zombi","W1000","Zombi","Zombi","W1000","Caracono","W750","Zombi","Zombi","W300","Caracono","Zombi","Zombi","W500","Zombi","Caracono","Zombi","HordaFinal","Caracono","Caracono","Caracono","Zombi","Zombi","Zombi","Zombi","Zombi","Zombi"]
  ];
var esperaEntreZombis = 0;
var esperaDeHorda = 0;

{fondos.add(createSprite(200,200));
fondos.add(createSprite(500,200));
fondos[0].setAnimation("Fondo1");
fondos[1].setAnimation("Fondo2");
fondos.setDepthEach(-1);
}/*Creación de fondos*/


{
var nombresPlantasConst =["Lanzaguisantes","Girasol","Petacereza","Nuez","Patatapum"];
var costosSemillasConst = [10,50,15,5,25];
var esperasSemillasConst = [375,375,2500,1600,1600];
var vidaPlantasConst=[5,5,100,45,5];
var esperasPlantasConst=[50,500,10,0,525];

var nombresZombisConst = ["Zombi","Caracono","Caracubo","Pertiga1"];
var vidaZombisConst = [10,20,60,20];


var spritesPlantas = createGroup();
var nombresPlantas =[];
var esperasPlantas = [];
var vidaPlantas =[];


var spritesZombis = createGroup();
var nombresZombis = [];
var esperasZombis = [];
var vidaZombis = [];


var spritesProy = createGroup();
var nombresProy = [];

var nombresItemsConst = ["Sol","SolCayente","Explosion","Spudow","Podadora"];
var esperasItemsConst = [0,350,150,75,0];

var spritesItems = createGroup();
var nombresItems = [];
var esperasItems = [];



var pala = createGroup();
var estadoPala = false;
pala.add(createSprite(364,40));
pala.add(createSprite(364,40));
pala.setAnimationEach("Pala");
pala[0].pause();
pala[1].pause();
pala.setScaleEach(0.8);
pala[0].setFrame(0);
pala[1].setFrame(2);

var tics = 0;
var LetsPlay = createSprite(200 + 300,344);
LetsPlay.setAnimation("Lets rock.png_1");
LetsPlay.depth = 5000;
var zombisMuestra = createGroup();
for (var i = 0; i < 8;i++){
zombisMuestra.add(createSprite(randomNumber(211,310) + 300,randomNumber(113,339)));
if( i < 6){
zombisMuestra[i].setAnimation("Zombi");
}else{
  zombisMuestra[i].setAnimation("Caracono");
}
zombisMuestra[i].setFrame(randomNumber(0,3));
zombisMuestra[i].depth = zombisMuestra[i].y;
}


var cursor = createSprite();
var pCursor = "";
cursor.visible= false;
cursor.tint= "rgba(255,255,255,0.5)";


var spritesSemillas= createGroup();
var nombresSemillas=[];
var costosSemillas=[];
var esperasSemillas= [];

var bandeja=createSprite(173,40);
bandeja.setAnimation("SeedBank.png_1");
bandeja.scale=(0.7);
bandeja.depth= 2;
  
}/*Variables de objetos*/
camera.x= 500;
camera.y= 200;
var eventos = "";
eventos = "ComenzarNivel";



World.frameRate= 35;

var sol = 50;
var esperaSol = tics;

function AgregarPaquete(name){
  spritesSemillas.add(createSprite(88 + 35 * spritesSemillas.length - 1,40));
  nombresSemillas.push(name);
  esperasSemillas.push(tics + (esperasSemillasConst[nombresPlantasConst.indexOf(lA(nombresSemillas))]) - 375);
  lA(spritesSemillas).setAnimation("Semilla" + name);
  costosSemillas.push(costosSemillasConst[nombresPlantasConst.indexOf(lA(nombresSemillas))]);
  spritesSemillas.setScaleEach(0.7);
}

AgregarPaquete("Lanzaguisantes");
AgregarPaquete("Girasol");
AgregarPaquete("Petacereza");
AgregarPaquete("Nuez");
AgregarPaquete("Patatapum");

function CrearPlanta(name,x,y){
  spritesPlantas.add(createSprite(x,y));
  lA(spritesPlantas).setAnimation(name);
  esperasPlantas.push(tics + esperasPlantasConst[nombresPlantasConst.indexOf(name)]);
  nombresPlantas.push(name);
  spritesPlantas.setDepthEach(3);
  spritesPlantas.setScaleEach(1);
  vidaPlantas.push(vidaPlantasConst[nombresPlantasConst.indexOf(lA(nombresPlantas))]);
  lA(spritesPlantas).setCollider("rectangle",8,0,8,28);
  playSound("assets/plant.mp3");
  if(name == "Nuez"){
    spritesPlantas[spritesPlantas.length - 1].setFrame(0);
    spritesPlantas[spritesPlantas.length - 1].pause();
  }
  console.log(name + " creado con éxito");
}

function CrearZombi(name,x,y){
  if(x == "S"){
  spritesZombis.add(createSprite(430,y));
  }else{
    spritesZombis.add(createSprite(x,y));
  }
  lA(spritesZombis).setAnimation(name + "Caminando");
  esperasZombis.push(tics);
  nombresZombis.push(name);
  vidaZombis.push(vidaZombisConst[nombresZombisConst.indexOf(lA(nombresZombis))]);
  lA(spritesZombis).setCollider("rectangle",0,17,15,28);
  console.log (name + " creado con éxito");
}

function Comportamientos(){
  ComportamientoPlantas();
  ComportamientoZombis();
  ComportamientoProy();
  ComportamientoItems();

}

function ComportamientoItems(){
  for(var i = 0; i < spritesItems.length; i++){
    if(item("SolCayente",i)){
      if(spritesItems[i].y < 300){
      spritesItems[i].y++;
      }else if(esperasItems[i] == 0){
        esperasItems[i] = tics + 250;
      }else if(tics >= esperasItems[i]){
        BorrarItem(i);
      }
    }
    if((item("Sol",i) || item("Explosion",i)) && tics >= esperasItems[i]){
      BorrarItem(i);
    }
    if((item("Sol",i) || item("SolCayente",i)) && mousePressedOver(spritesItems[i])){
      playSound("assets/sunClick.mp3");
        sol+=25;
        BorrarItem(i); 
    }if(item("Spudow",i) && tics > esperasItems[i]){
      BorrarItem(i);
    }
    if(item("Podadora",i) && spritesItems[i].isTouching(spritesZombis)){
      nombresItems[i] = "PodadoraAndante";
    }
    if (item("PodadoraAndante",i)){
      spritesItems[i].x+= 4;
      if(spritesItems.isTouching(spritesZombis)){
        for (var y = 0;y < spritesZombis.length - 1;y++){
          if(spritesItems[i].isTouching(spritesZombis[y])){
            BorrarZombi[y];
          }
        }
      }
      if(spritesItems[i] > 420){
        BorrarItem(i);
      }
    }
  }
}

function ComportamientoPlantas(){
  var pivote = createSprite();
  
  pivote.visible= false;
  for (var i = 0;i < spritesPlantas.length;i++){
    spritesPlantas[i].tint= "rgba(255,255,255,1)";
    pivote.x= spritesPlantas[i].x;
    pivote.y= spritesPlantas[i].y;
    //PLANTAS
    if(planta("Lanzaguisantes",i) && esperasPlantas[i] < tics){
       //LANZAGUISANTES
       
       var choque = false;
       pivote.setCollider("rectangle",(410 - spritesPlantas[i].x) / 2,0,410 - spritesPlantas[i].x,5);
       pivote.visible= false;
       if(pivote.isTouching(spritesZombis)){
         choque= true;
       }

       if(choque){
         CrearProyectil("Guisante",spritesPlantas[i].x + 22,spritesPlantas[i].y- 8) ;
          esperasPlantas[i]=tics + 1; 
    }
    }else if(planta("Girasol",i) && tics >= esperasPlantas[i]){
      //GIRASOL
      spritesPlantas[i].tint= "rgba(415,415,415,1)";
      CrearItem("Sol",spritesPlantas[i].x,spritesPlantas[i].y);
      esperasPlantas[i]= tics + 1;
    }else if(planta("Petacereza",i) ){
      //PETACEREZA
      if(tics >= esperasPlantas[i]){
      playSound("assets/Cherrybomb.mp3");
      pivote.setCollider("rectangle",0,0,153,147);
      for (var j = 0; j < spritesZombis.length;j++){
        if(pivote.isTouching(spritesZombis[j])){
          vidaZombis[j]=vidaZombis[j] - Math.min(vidaZombis[j] + 2,200);
          
        }
      }
      CrearItem("Explosion",spritesPlantas[i].x,spritesPlantas[i].y);
      BorrarPlanta(i);
      }else{
        if(tics % 2 == 0){
        spritesPlantas[i].scale+=0.1;
        }
      }
    }else if (planta("Nuez",i)){
      //NUEZ
        spritesPlantas[i].setFrame(Math.floor((45 - vidaPlantas[i]) / 14));
    }else if(planta("Patatapum",i) ){
      //PATATAPUM
      if(tics > esperasPlantas[i]){
      spritesPlantas[i].setAnimation("PatatapumArmada");
      }
      if(tics > esperasPlantas[i] + 100 && spritesPlantas[i].isTouching(spritesZombis)){
        
        CrearItem("Spudow",spritesPlantas[i].x,spritesPlantas[i].y - 20);
        playSound("assets/potato_mine.mp3");
        pivote.x = spritesPlantas[i].x;
        pivote.y = spritesPlantas[i].y;
        pivote.setCollider("rectangle",0,0,spritesPlantas[i].width,spritesPlantas[i].height = 30);
        for (var y = 0; y < spritesZombis.length;y++){
          if(pivote.isTouching(spritesZombis[y])){
             BorrarZombi(y);
          }
        }
        BorrarPlanta(i);
      }
    }
    if(vidaPlantas[i] < 1){
      playSound("assets/gulp.mp3");
      BorrarPlanta(i);
    }
    
  }
  pivote.destroy();
}
function QuitarVidaZombi(i,x){
  vidaZombis[i] -= Math.max(Math.min(vidaZombis[i],x),0);
}
function QuitarVidaPlanta(i,x){
  vidaPlantas[i] -= Math.max(Math.min(vidaPlantas[i],x),0);
}
function ComportamientoProy(){
  if(spritesProy.isTouching(spritesZombis)){
  for (var i = 0; i < spritesProy.length; i++){
  if(spritesProy[i].isTouching(spritesZombis)){
      var index = spritesZombis.indexOf(groupTocandoSprite(spritesProy[i],spritesZombis));
      if(proy("Guisante",i)){
        
        playSound("splat" + randomNumber(2,3) + ".mp3");
        QuitarVidaZombi(index,1);
        BorrarProy(i);
      }
      
    }else if(spritesProy[i].x > 600){
      BorrarProy(i);
    }
  }
  }
}

function Botones(){
  if(mousePressedOver(LetsPlay)){
    LetsPlay.visible = false;
    eventos = "Elegido";
    esperaSol = tics + 500;
  }
}

function ComportamientoZombis(){
  for (var i = 0;i < spritesZombis.length;i++){
    //ZOMBIS
    if(spritesZombis[i].x < 13){
      eventos = "Perder";
      BorrarZombi(i);
      stopSound("assets/GrassWalkDS.mp3");
      playSound("assets/losemusic.mp3");
      for(var y = 0;y<nombresZombis.length; y++){
      spritesZombis[y].setAnimation(nombresZombis[y]);
      }
      
      
    }else if (eventos == "JugarNivel"){
      if(vidaZombis[i] == -2){
        spritesZombis[i].tint="rgba(0,0,0,1)";
        spritesZombis[i].pause();
        esperasZombis[i]=tics + 100;
        vidaZombis[i]= -1;
      }
      else if(vidaZombis[i] == 0){
        spritesZombis[i].setVelocity(0,0);
        vidaZombis[i] = -1;
        if(zombi("Zombi",i) || zombi("Caracono",i) || zombi("Caracubo",i)){
          spritesZombis[i].setAnimation("ZombiMuriendo");
        }else if(zombi("Pertiga1",i) || zombi("Pertiga2",i) || zombi("Pertiga3",i)){
          spritesZombis[i].setAnimation("Pertiga1Muriendo");
        }
        esperasZombis[i]= tics + 70;
      }else if(vidaZombis[i] == -1 && tics >= esperasZombis[i]){
        BorrarZombi(i);
      }else if(vidaZombis[i] > 0){
  
      if(zombi("Zombi",i) || zombi("Caracono",i) || zombi("Caracubo",i)){
        if(vidaZombis[i] <  11){
          nombresZombis[i] = "Zombi";
        }
        if( spritesZombis[i].isTouching(spritesPlantas)){
          spritesZombis[i].setAnimation(nombresZombis[i] + "Comiendo");
          spritesZombis[i].setVelocity(0,0);
          if(esperasZombis[i] <= tics){
          playSound("chomp" + randomNumber(1,2)+".mp3");
          vidaPlantas[spritesPlantas.indexOf(groupTocandoSprite(spritesZombis[i],spritesPlantas))]-=1;
          spritesPlantas[spritesPlantas.indexOf(groupTocandoSprite(spritesZombis[i],spritesPlantas))].tint="rgba(415,415,415,1)";
          esperasZombis[i]=tics + 25;
          }
        }else{
          spritesZombis[i].setAnimation(nombresZombis[i] + "Caminando");
          spritesZombis[i].x-= 0.2;
        }
    }else if(zombi("Pertiga1",i)){
        if(spritesZombis[i].isTouching(spritesPlantas)){
          spritesZombis[i].setAnimation(nombresZombis[i] + "Saltando");
          nombresZombis[i]="Pertiga2";
          esperasZombis[i]= tics + 25;
          playSound("assets/polevault.mp3");
        }else{
          spritesZombis[i].setAnimation(nombresZombis[i] + "Caminando");
          spritesZombis[i].x -= 0.45;
        }
    }else if(zombi("Pertiga2",i)){
      if(tics >= esperasZombis[i]){
        nombresZombis[i] = "Pertiga3";
      }else{
        spritesZombis[i].x -= 1.8;
      }
    }else if (zombi("Pertiga3",i)){
      if(spritesZombis[i].isTouching(spritesPlantas)){
          spritesZombis[i].setAnimation(nombresZombis[i] + "Comiendo");
          if(esperasZombis[i] <= tics){
            playSound("chomp" + randomNumber(1,2)+".mp3");
            vidaPlantas[spritesPlantas.indexOf(groupTocandoSprite(spritesZombis[i],spritesPlantas))]-=1;
            spritesPlantas[spritesPlantas.indexOf(groupTocandoSprite(spritesZombis[i],spritesPlantas))].tint="rgba(415,415,415,1)";
            esperasZombis[i]=tics + 25;
          }
        }else{
          spritesZombis[i].setAnimation(nombresZombis[i] + "Caminando");
          spritesZombis[i].x -= 0.15;
        }
    }
    
    
    
  }
    }
}
}

/*Utilidades*/
  function groupTocandoSprite(sprite,targetGroup){
  for (var f = 0;f < targetGroup.length;f++){
    if(sprite.isTouching(targetGroup[f])){
      return targetGroup[f];
    }
  }
}
function item(x,i){
  return nombresItems[i] == x;
}
function planta(x,i){
  return nombresPlantas[i] == x;
}

function zombi(x,i){
  return nombresZombis[i] == x;
}

function proy(x,i){
  return nombresProy[i] == x;
}

function lA (x){
  return x[x.length - 1];
}



function CrearProyectil (name,x,y){
  spritesProy.add(createSprite(x,y));
  lA(spritesProy).setAnimation(name);
  if(name == "Guisante"){
  lA(spritesProy).scale=0.7;
  lA(spritesProy).setVelocity(5,0);
  }
  nombresProy.push(name);
}

function CrearItem (name,x,y){
  spritesItems.add(createSprite(x,y));
  nombresItems.push(name);
  lA(spritesItems).setAnimation(name);
  esperasItems.push(tics + esperasItemsConst[nombresItemsConst.indexOf(name)]);
  if(name == "Sol"){
    lA(spritesItems).tint= "rgba(255,255,255,0.7)";
  }else if(name == "SolCayente"){
    lA(spritesItems).tint= "rgba(255,255,255,0.7)";
  }
  
}




function Plantar(){
  bandeja.x = camera.x  - 27;
  bandeja.depth = 2;
  Semillas();
  Cursor();
  Pala();
  textFont("Impact, Charcoal, sans-serif");
  textSize(17);
  fill("black");
  textAlign(CENTER,BOTTOM);
  text(sol + "",camera.x - (200 - 45),68);
  
}
function Cursor(){
  if(pCursor != ""){
  cursor.setAnimation(pCursor);
  cursor.pause();
  cursor.visible = true;
  }
  if(!(cursor.isTouching(spritesPlantas))&& cursor.y > 100 && cursor.y < 337 && cursor.x > 30 && cursor.x < 376 && pCursor != ""){
    cursor.visible= true;
    if(mouseWentDown(LEFT)){
      spritesSemillas[nombresSemillas.indexOf(pCursor)].tint="rgba(255,255,255,1)";
      esperasSemillas[nombresSemillas.indexOf(pCursor)]= tics + esperasSemillasConst[nombresPlantasConst.indexOf(pCursor)];
      CrearPlanta(pCursor,39 * Math.round((camera.mouseX - 10) / 39) + 15,50 * Math.round((camera.mouseY - 14) / 50) + 14);
      cursor.visible=false;
      sol-=costosSemillasConst[nombresPlantasConst.indexOf(pCursor)];
      pCursor="";
    }
  }else{
    cursor.visible= false;
  }
  cursor.x= 39 * Math.round((camera.mouseX - 10) / 39) + 15;
  cursor.y= 50 * Math.round((camera.mouseY - 14) / 50) + 14;
}

function Pala(){
  pala[0].x=camera.x+163;
  if(eventos == "JugarNivel"){
  if(estadoPala){
    pala.setDepthEach(4);
    pala[1].x = camera.mouseX;
    pala[1].y = camera.mouseY;
    if(pala[1].isTouching(spritesPlantas)){
      groupTocandoSprite(pala[1],spritesPlantas).tint="rgba(415,415,415,1)";
    }
    if (mouseWentDown()){
      if(pala[1].isTouching(spritesPlantas)){
      BorrarPlanta(spritesPlantas.indexOf(groupTocandoSprite(pala[1],spritesPlantas)));
      }
      estadoPala = false;
    }
  }else{
    pala[1].x = camera.x + 163;
    pala[1].y = 40;
  }
  if(mouseWentDown() && mouseIsOver(pala[0])){
    estadoPala = !estadoPala;
  }
}else{
  pala[1].x = camera.x + 163;
    pala[1].y = 40;
}
}

function Semillas(){
  for(var i = 0; i < spritesSemillas.length;i++){
    spritesSemillas[i].x= camera.x - (200 - (88 + 35 * i));
    var plantar = false;
    var pX =camera.x - (200 - (70 + 35 * i));
    var pY = Math.max(16 + 50 / esperasSemillasConst[nombresPlantasConst.indexOf(nombresSemillas[i])] * (esperasSemillas[i] - tics),16);
    
    if(sol >= costosSemillas[i] && pCursor != nombresSemillas[i]  && tics >= esperasSemillas[i]){
      plantar = true;
      spritesSemillas[i].tint="rgba(255,255,255,1)";
      
    }else if (pCursor != nombresSemillas[i] && eventos == "JugarNivel"){
      plantar = false;
      spritesSemillas[i].tint="rgba(150,150,150,1)";
      fill(rgb(1,1,1,0.5));
      noStroke();
      shape(pX,16,pX+35,16,pX+35,pY,pX,pY);
    }
    if(mousePressedOver(spritesSemillas[i]) && plantar && eventos == "JugarNivel"){
      
      pCursor=(nombresSemillas[i]);
      spritesSemillas[i].tint="rgba(150,150,150,1)";
    }
  }
}

function BorrarPlanta(x){
  spritesPlantas[x].destroy();
  nombresPlantas.splice(x,1);
  vidaPlantas.splice(x,1);
  esperasPlantas.splice(x,1);
}

function BorrarZombi(x){
  spritesZombis[x].destroy();
  nombresZombis.splice(x,1);
  vidaZombis.splice(x,1);
  esperasZombis.splice(x,1);
}

function BorrarTodosZombis(){
  spritesZombis.destroyEach();
  nombresZombis = [];
  vidaZombis = [];
  esperasZombis = [];
}

function BorrarProy(x){
  spritesProy[x].destroy();
  nombresProy.splice(x,1);
}

function BorrarItem(x){
  spritesItems[x].destroy();
  nombresItems.splice(x,1);
  esperasItems.splice(x,1);
}
function ComenzarAnimInicio(){
  
  
  
  if(eventos == "ComenzarNivel"){
    fondos[0].x= 200;
    fondos[1].x= 500;
    camera.x= 500;
    eventos= "Elegir";
    
  }else
  if(eventos == "Elegido" && camera.x > 200){
    camera.x -= 10;
  }else
  if(camera.x <= 200 && eventos == "Elegido"){
    for (var i = 0; i < 5;i++){
    CrearItem("Podadora",10,120 + 49 * i);
    spritesItems[spritesItems.length - 1].scale = 0.8;
    }
    zombisMuestra.destroyEach();
    playSound("assets/GrassWalkDS.mp3",true);
    stopSound("assets/Choose your seeds.mp3");
    eventos ="JugarNivel";
  }
  
  
}

function SolDelCielo(){
  if(tics >= esperaSol){
    CrearItem("SolCayente",randomNumber(100,300),-20);
    esperaSol = tics+500;
    spritesItems.setDepthEach(1);
  }
}
function Nivel(){
  if(eventos == "JugarNivel"){
    
       if(niveles[nivelActual][progreso] == "HordaFinal"){
        if(esperaDeHorda == 0){
          esperaDeHorda = World.seconds + 3;
        }
        textAlign(CENTER,CENTER);
        fill("red");
        stroke("black");
        strokeWeight(5);
        textSize(20);
        text("¡SE APROXIMA UNA GRAN HORDA DE ZOMBIS!",200,200);
        if(World.seconds > esperaDeHorda){
         progreso++;
         esperaDeHorda = World.seconds + 3;
         esperaEntreZombis = tics + 30;
        }
      }else if(niveles[nivelActual][progreso].indexOf("W") == 0){

        if(esperaEntreZombis == 0){
          esperaEntreZombis = tics + parseInt(niveles[nivelActual][progreso].substr(1));
        }
        if(tics >= esperaEntreZombis || spritesZombis.length == 0 && progreso > 1){
          progreso++;
          esperaEntreZombis = 0;
        }
      }else if(progreso != niveles[nivelActual].length - 1){
        if(progreso == 1){
          playSound("assets/awooga.mp3");
        }
        CrearZombi(niveles[nivelActual][progreso],"S",90 + 50 * randomNumber(0,4));
        progreso = Math.min(progreso + 1, niveles[nivelActual].length - 1);
        if(niveles[nivelActual][progreso].indexOf("W") != 0){
        esperaEntreZombis =  tics + 20 ;
        }else{
          esperaEntreZombis = 0;
        }
      }else if(progreso == niveles[nivelActual].length - 1 && spritesZombis.length == 0){
        eventos = "TerminarNivel";
        stopSound("assets/GrassWalkDS.mp3");
      playSound("assets/winmusic.mp3");
      }
      
    }
    if(eventos == "TerminarNivel"){
      
      textAlign(CENTER,CENTER);
        fill("red");
        stroke("black");
        strokeWeight(5);
        textSize(20);
        text("THANK YOU FOR PLAYING! SOON MORE CONTENT!",200,200);
    }
    if (eventos == "Perder"){
     textAlign(CENTER,CENTER);
    fill(rgb(0, 200, 0));
    stroke(rgb(0, 255, 0));
    strokeWeight(10);
    textSize(50);
    text("¡HAS PERDIDO!",200,200);
}
    
  }
  
function draw(){
  background("black");
  ComenzarAnimInicio();
  Botones();
  drawSprites();
  Plantar();
  tics ++;
  if(eventos == "JugarNivel"){
    SolDelCielo();
    Comportamientos();
    
  }
   
  Nivel();
  
}


eventos= "Elegir";
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
