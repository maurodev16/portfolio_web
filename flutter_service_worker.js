'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16d11a725604e0dc87a3dcf211767809",
".git/config": "fc4751ebba67da99dfbb2ef48122ee8e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a889a9ecbbe609ab9569cf9605fe0689",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "38063285d067cdada755852dd6f6edd7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0bf7e03cfae2661a4fae9985d4ad2cd1",
".git/logs/refs/heads/master": "0bf7e03cfae2661a4fae9985d4ad2cd1",
".git/logs/refs/remotes/origin/master": "da73676d851f2becc9597af60be049be",
".git/objects/01/d7e5b37109d6746ad58f3b766572fe6b5acfd8": "7812f183947e5fed4907c9c11be53669",
".git/objects/02/7f98ff61b07535a4d5d7756765b8e6086d2d63": "8a95611e4d5f089310970e08a0c61ffd",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/161e29570af2eed45a0a64d119f2bb393c90f6": "ac801f40ba4716463570395f1c1c27a4",
".git/objects/09/1d53d783a333f3e9d0430ccbf277e7fce4dcbd": "c9c3aa8e10e51ddd9181fc0fc3085c86",
".git/objects/0e/bd7c6b47488da883c2e959f609f651ea234521": "870cbf1778dcdb675f69aa5d937f4484",
".git/objects/0f/79055964afb4603dea39c158c1a881fac8b682": "155bb98775d5761d5e1710523f82dd52",
".git/objects/10/5ba6354e9b6fa07e5a2c8c2ea593ec416e7482": "648a734e03fbd5927fe1f777f96806d4",
".git/objects/12/970bd70ba77a74ec0e6d6eaa4cee025dabe36e": "5faf3d804b6234eef60429683f63cebc",
".git/objects/12/dffd12d2513f96c8a2d5fa8ba56bf26d237c5a": "814ac6943300ff209f1fa0ece9c93c24",
".git/objects/13/488f52f6ae6f9bf58f7fa78b15ed73cb0178db": "c923fcf319c521bb18b3c825a807065d",
".git/objects/13/7cbfcad18fcea78983350de60880079e8d2d4c": "2e2b907640d67f41186370b0801e52c1",
".git/objects/15/567585879d6055c65f36be8a8f694c29e03ab6": "a075a226f959e3798770fb5d3e543cc7",
".git/objects/17/cb9dcfe3e6023d76182c7c86d2e01bdeafc04d": "27df59ad12bfedf05aba13f6e8cd1a99",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/d8bf3bf5627b240281fa9cab293699a552f9ff": "f416e0befd09136e1ba8b93d0a4eb7b8",
".git/objects/2f/789d9a33fe6569fa012fe70b1c82d57db8a833": "a8b61fd418108702b36bba5480a0150e",
".git/objects/2f/882a9dedc6fb04f2a61bf7058fb440c4c12378": "8da84d8a989d091604f7027528a9ed89",
".git/objects/2f/fa05b8283235c68e912ac94f6fd2398ecf391a": "31c09cf03d3211d84d5f229a82d541b7",
".git/objects/31/afb375145b6058f1b76bde2a11dbb300da1e97": "0a29e4418da0a870246999be15f7e31f",
".git/objects/34/bbb58c75da1fe3a7a1e5be02b73de64877034c": "d56f9ec6b32493a7e0b20acba462986c",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/26a7e5e4236330de6385b95522424107682238": "08fa6f635b308282d93a2a258a1c4f00",
".git/objects/3e/5bfdb451cf36b023965886d99aa11fbe4e06cb": "03f7105a1487d9737ef61ffa748f10e8",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/dcf900fbe87e3254127f67291258c4d64ca98b": "cdbbccfd42d9ec38c687a582539cece2",
".git/objects/44/7a930db1cc203e560cf1565793cfbd69109d5f": "ff9bc162ea6c32ac564c6d13b46a97fb",
".git/objects/45/7bc4d014a864655d995130a5e21e081b4a7d2f": "8b3e1cfe7291df94933a59b5b4ef528a",
".git/objects/4a/acefecf61fca3bc8601754709d0cbde1f17e92": "ccc6d285d8b6f37a8a42c269530e6072",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/e0667bc78f366f69719313f3ea97e3d773d479": "7330bb28dd2859e4e547ae7bf87f5cc5",
".git/objects/55/69f04ed688850937a1e765e78aa8286ea8092b": "d08fbfcb5d55458b12eb9cde27fb6d51",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/65/2fbaa2467f2f1e7ec586ed6ff4a87b57ce2dbf": "19354ab8e72dff0b2e7f4d788a55544a",
".git/objects/67/749c4ff67a3d62da6353020a89b88c73634dd6": "fec3af9a42f6ee5ded513f04d60e9d47",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/67bc9f5e7b13902c914177f177249f48745b12": "9f98c6e4a64549cb27c52d62123d5944",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/bb556f350848c50a612a01558f9cec8e3c03af": "c72ca31a8fb8050a6a95d5c63899a0eb",
".git/objects/78/6f591f84c842c5b306a317e83db92dbcb45a24": "5e56df6fda4982b219888d05585ac356",
".git/objects/7b/466da7bbf73d120724093e25c33a366d06a342": "baaabc2635f7a2293fa9941872283678",
".git/objects/7c/55be6d39512ba421912c27148595d12ceff273": "e4e29d5b201ebf6ec00752fbbc7aa308",
".git/objects/83/9528fdfa69afae50d6ac2a86c8a190af5a8dcc": "e892ab76bb44d9b12550330a73c63a2c",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/87/8803a932ecd5ab5d5c268c4ff8d7406be0702a": "cd3591c7844fd1bc9451ffd5c87b62e3",
".git/objects/88/1afa439cdb31540a4c6534599c99832f3e1a91": "416aecbf210467783aeda3b697b82e44",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4bfc43b5e87c7630337277f23abe7326cc185f": "d7e4ad155fb3b7c1b449d6418c1bd3f5",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8b/7a3e22d48948decf5f45ea03324d8cd77715f5": "b4dd9e83728d4d43341e6242ccd48ae2",
".git/objects/8c/074902f437d5a40a0243fc6d26aabb57054e23": "03bc0b481a1b6a381e440b8848f5d34c",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/77f07cfdce99b3494eaba9abe7312e3d1fbaa8": "dee0346fcce4588c7f8680309a82273e",
".git/objects/8e/d002c99ce4125d6bf3a43d283f9c22586bfa8f": "0412e09e40cdd1b540dec62063ea8d56",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/c39913e33382a5071d76062e0519619cfa8493": "d3ecaaf86ee61d4a55befdf27be3928a",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9e/e096a72ff3c34152edf8a1bd44b73dad23296a": "67dd36f78684343176db737b3cc8625a",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a7/8be187ca6819966cdc78ba68096dc8df341a70": "c36bd096fcbb854f3128850bcdff34fe",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/503da0a20a4a13c24a5cf03ffe6615c35694d1": "4f1abfaf947d9a62c146654849f803b8",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/77baccea66e0b782178ff3f81a082a3c90f46d": "9d1c1aca3bffe5c5db3a967bdca751b5",
".git/objects/b0/f254f9ca09d99362c98e7594530f709ad58220": "f3e9715a35f59f36bad0ba278b9d7240",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/c61ea302d892cc9c9e3a562f2c4ebb8ba7fda9": "98ea429957dd8905ebf3da08cfd8f296",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/661f789a3140d1ab2e3c44ee035edd4067b9ab": "3cd8850968b04a279cccdc99eb8f0312",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5986ddb109ff80911bc8940830dd67c02ce742": "a42d2d917689cb5d82416f3163d17c4d",
".git/objects/b9/7a9f144bd21ebc0c1d3b574c42333f6301ced1": "2b58a9bfd768a1002ba4a682a2907ad5",
".git/objects/b9/f7df75e9ad841edaca8a35ec1886cfbdfccfe8": "de97d5e6301edb51a5ecf0b45379987a",
".git/objects/bd/b3630750f7c4548eea35b5c6c75b5de64d303c": "59e231b42acf8ccb9accc0d14a655991",
".git/objects/c2/431aa3d782eadcc1840458997b05c3fa363dbb": "d12aa9acd2998eeedb8ed6d340db4d38",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/e5aed014a4a741f35c0ed67af8cf15204f7101": "2ff173044dbb2497e660f32b7e64ded0",
".git/objects/cc/f81ce70f96f9eb9aed0838cf766e7dc38cbd06": "0e917d53e4f22484fdeb8ffb26ad2e44",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/cf/c641a5fa4dcc5e1d8dbbea1e7ee51c253b2cd0": "4c0cc59709822e789bf20ac371a99c5e",
".git/objects/d1/9e36cd0072a96551670703423ff09b049bdbbb": "674dd281bdb99d3327eed7c96f3aae14",
".git/objects/d3/b21acb2fdcb7fce86252aa2178c1f59e15471b": "42a31daab0847666b13ca61bf6be7a64",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/39b410f000471aaca2518b3fda04393e57e282": "fec901c4404a6f261d87ac6faeda58a5",
".git/objects/d8/d4d5b9b9ead3c1491f50b72345589574567274": "84a0ea52e77989179462ef249e659898",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/de/00b214d8ee6363a8452ca05061b63e46a6bfdc": "997c9b168836972a1601f6e9a77142f6",
".git/objects/ea/b30d654763d80b4185dee3e6cbd708b5e44aad": "8df6b072e9c00b57b0fbcf8b1ca5638c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/613aac2a2bcaf1fc2fd7f369e5086885dd5883": "fd9b771f05482a5a62977a5a6745b48b",
".git/objects/ef/1bb97c73d573d6c2c90b4780bff59866598129": "b7118953507f4c6d82694dc8b219f309",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4da3b94e4dc547037f9cd852caba1eb2d60763": "04f3f07452c5ed99382880dac0a5abf9",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f6/9f7a6fa290b9ee529ec000c163b416c4458b16": "343e104234ca0dd7fcb190e58d0a2f90",
".git/objects/f6/fc22b3a871b9f49f398d7d77b2273320b770a2": "1f4fe6dbabc14a5d0b5f8ada8ea57c72",
".git/objects/f7/89f8a43ef931fd959134a4f6ce73d355a16447": "9c442d00c8e758baf3919f7644485d9d",
".git/objects/fe/b06cfdc374f3f7872b7b4d5a321464c225ce60": "d8d58dc070abbb0c0c565661296465db",
".git/ORIG_HEAD": "d83700d981c3f9e1f5d22c0475db514f",
".git/refs/heads/master": "d83700d981c3f9e1f5d22c0475db514f",
".git/refs/remotes/origin/master": "d83700d981c3f9e1f5d22c0475db514f",
"assets/AssetManifest.bin": "10e4f2181d4ffb09d1c53af1b487b134",
"assets/AssetManifest.bin.json": "f53dcc1ba9ead94b7e186e975d36fb51",
"assets/AssetManifest.json": "67e267882761e5ea53a994c0fa19df0b",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "603bcead9d81b75864b4d3d0b092e4f2",
"assets/NOTICES": "68e3bef4a32a952bc4665f390ae978d4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5cd575566fbe97ae0dbd8f5557c16eb3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "bbaf64a90d76323a9ff4ec74e7e722c1",
"favicon.png": "b0dafa8b425d1df05af97a38bf716fd4",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "fea5cba73b44dac2ff90534540eb9a2d",
"icons/icon-192-maskable.png": "30b4b26edaa833dba99572529563f0cf",
"icons/icon-192.png": "7a73bbe30ae6dd76e14843441f227d8e",
"icons/icon-512-maskable.png": "acc6e7e0e2e873a8c21ca251543aa75f",
"icons/icon-512.png": "b0dafa8b425d1df05af97a38bf716fd4",
"index.html": "a2deff23a3893dad4ec2356f58362cef",
"/": "a2deff23a3893dad4ec2356f58362cef",
"main.dart.js": "b8419add18cd02142b39033d33ff6f19",
"manifest.json": "75ddf561701309cd388dc71fbe615148",
"version.json": "87ba34d7f308aec6cca335dd0a4ec3f3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
