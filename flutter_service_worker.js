'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "914affca554a19d6e35e2df514434358",
"index.html": "c2d66c6e2a289f5b26eb9990115a883b",
"/": "c2d66c6e2a289f5b26eb9990115a883b",
"main.dart.js": "1072918569e4d301bb5b1d8a5b133bcf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ee10a71db41761388a76111642465837",
"assets/AssetManifest.json": "e5c293e2062b39467fda7db6c5dbe95c",
"assets/NOTICES": "b1aea64d58bb722aae2b3b542e7a719e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/research_package/assets/lang/en.json": "1d7025059e3ff6592542d53208eb8164",
"assets/packages/research_package/assets/lang/da.json": "8226322230709bbdbedaf2c7b31e907b",
"assets/packages/research_package/assets/icons/document.png": "baf5f7e19f4a40f0efbcb28e68816eb0",
"assets/packages/research_package/assets/icons/archive.png": "774dd5a71e4d911fe550cf55515632f6",
"assets/packages/research_package/assets/icons/settings.png": "4e19b796edaaec7be67204987b9b6ac2",
"assets/packages/research_package/assets/icons/health.png": "be3ed6fb9fe7460b7e1fc9223c5f053a",
"assets/packages/research_package/assets/icons/networking.png": "5c32a1b960963f41dd7e93a370e5b06f",
"assets/packages/research_package/assets/icons/deadline.png": "b84f6551cefb9a1fc843bc38b3c377c1",
"assets/packages/research_package/assets/icons/target.png": "20cd5efaaab93aca9b9b59a1cb0e5f67",
"assets/packages/research_package/assets/icons/management.png": "ca332c308380f95bae725ea460002f0d",
"assets/packages/research_package/assets/icons/task.png": "ff2254a13f8390240811dd0f48f3b7c8",
"assets/packages/research_package/assets/icons/id.png": "e82237beb95dd46c69d645c1f404f09e",
"assets/packages/research_package/assets/icons/handshake.png": "42d786337771ddc6ad8847c26af3ac41",
"assets/packages/research_package/assets/icons/location.png": "ae8041eb0eb7ef658ae90fd234e26f1d",
"assets/packages/research_package/assets/icons/analysis.png": "ff31bab59d70bd99192f05381e81b2c4",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/bubbel1_platzhalter.png": "215b5ae0e31741c83f01d426ae8ae251",
"assets/assets/dialogflow_service.json": "faf760098bb01a33bbe8dc3dba8f4c5c",
"assets/assets/NLP.png": "1a42abb98d3bd19b3eb0111ec0ccb37c",
"assets/assets/QnA1_platzhalter.png": "8c204133a658fb37ad7aafe422d15744",
"assets/assets/send2_platzhalter.png": "a9637f3d5945a6b39f805fcc854e2f4c",
"assets/assets/speicher.png": "cc48874c9b4f7aec030217c85146280b",
"assets/assets/Head1.png": "c14ec94e1449c70849dbfb2adb297ff4",
"assets/assets/eingabe3.png": "92b178a3b7db1e9e24753c7b44c3cf72",
"assets/assets/eingabe3_platzhalter.png": "1b37a6c41438341a3cc7bc5b2f4fc291",
"assets/assets/kabel1_platzhalter.png": "827082d078781fb0d2192c769bd4e40a",
"assets/assets/send_platzhalter.png": "e9280d7928e77f562899875ddd5384e1",
"assets/assets/Head2.png": "b35637f6743add0b08faff2b08a4e050",
"assets/assets/Head1_platzhalter.png": "6a2de0695a6c0480198c27cbaf53bc2a",
"assets/assets/eingabe1.png": "cb34fa65e7b08788e977605b9854eef9",
"assets/assets/Head3.png": "0fd89c7c8e82dc6a7883f9f8a590389a",
"assets/assets/send2.png": "f5f3749af7d408ab625da190978b341f",
"assets/assets/speicher_placeholder.png": "e0c0708a633b5fe7c602a3d0aef72a74",
"assets/assets/kabel6_platzhalter.png": "553bf3df0f4218984fead411361fc313",
"assets/assets/kabel5.png": "2f59d8c5ef6881c37a90192b2eacae1d",
"assets/assets/Anleitung3.png": "b3e1fbd2e9c8a879a915555accfd17e3",
"assets/assets/eingabe1_platzhalter.png": "c51ef20beda71fa9773a8b462c718aa9",
"assets/assets/kabel3_platzhalter.png": "6bfca9aa160b2a877fa38a2c9012e5a9",
"assets/assets/Anleitung2.png": "a0b2d5f5f62c5b8b21a58ae3f9b78ae1",
"assets/assets/SysBank_placeholder.png": "ed9a13d05fcc7d8dc2c1ee5ffc3fc098",
"assets/assets/kabel4.png": "2b0e843a413226dd3a01d76d744bfdee",
"assets/assets/kabel6.png": "86f8bc71f8bbae877c2959351480253d",
"assets/assets/QnA2_platzhalter.png": "e84c0aeeb6797d43fd7a76177c863ba9",
"assets/assets/speicher_platzhalter.png": "3f7cc5bc7922fc749d08ba700504ffb1",
"assets/assets/Anleitung1.png": "2c217861683056b6a210d5c33f7d737e",
"assets/assets/Hintergrund/A1.png": "798cdf044b421241bec69362f60e57c3",
"assets/assets/Hintergrund/A3.png": "428bf3ca5c8b7ab51dfbccdddc011401",
"assets/assets/Hintergrund/A2.png": "32f2747a2b2ae246ecfb1d16f86b8b33",
"assets/assets/Hintergrund/A5.png": "a89d1f1dae041f8c9c5aae80489d1848",
"assets/assets/Hintergrund/A4.png": "c843857c668f47da70a56fa912fde338",
"assets/assets/Hintergrund/G3.png": "2edbfe4229d2550e2b2e151be6124067",
"assets/assets/Hintergrund/G2.png": "38fb2ef77ec8a9e7a517310ce4ae5000",
"assets/assets/Hintergrund/F4.png": "f3120b2c78686116612dd0f3961c9409",
"assets/assets/Hintergrund/G1.png": "ad31616bc23aecadc40099ae54534103",
"assets/assets/Hintergrund/F5.png": "547c6766de14f881aa250c0b9d594754",
"assets/assets/Hintergrund/F1.png": "911332e1723d286b11efe8af8e8e659f",
"assets/assets/Hintergrund/G5.png": "97ca708848d1138eaf1647dd01d20323",
"assets/assets/Hintergrund/G4.png": "408214796b388fb69bcfc87e68e99548",
"assets/assets/Hintergrund/F2.png": "1cfc49114037fe9b4619a7a0ec7d0da2",
"assets/assets/Hintergrund/F3.png": "d03f122af92cffc30f23b8761d6b3209",
"assets/assets/Hintergrund/I1.png": "aeb46007541b0f830b013680de43a8fc",
"assets/assets/Hintergrund/H5.png": "18d00c74fc2e3a35738180bcb2fcec1e",
"assets/assets/Hintergrund/E2.png": "a0ca01fffdf1a02f1ddd6b108b492006",
"assets/assets/Hintergrund/E3.png": "799f51e4a868be15ffa232db5a3482ab",
"assets/assets/Hintergrund/H4.png": "ca4f07bafb541d5569c15f40806efe8e",
"assets/assets/Hintergrund/I2.png": "dd63ee2f2641920c46ff9503ad4698b3",
"assets/assets/Hintergrund/D5.png": "890517cac94d38da421308c78af55dd6",
"assets/assets/Hintergrund/E1.png": "3e17d64095a5d81dad331b0a96eb5736",
"assets/assets/Hintergrund/D4.png": "373dc00fc9b80ddbf71a80b90f66d2f5",
"assets/assets/Hintergrund/I3.png": "b6969acfb744ba722844f9d8b05650de",
"assets/assets/Hintergrund/H3.png": "989cdb53e8843ed2bb036628f459e130",
"assets/assets/Hintergrund/E4.png": "dc3fb413a5182e4030652d0be98df774",
"assets/assets/Hintergrund/E5.png": "8bc3635c3cce4f2eee91bdbab0bbecd6",
"assets/assets/Hintergrund/D1.png": "fc5196e8855fea58d068df89734ff040",
"assets/assets/Hintergrund/H2.png": "0547aa018649f2e698db7d535c973dac",
"assets/assets/Hintergrund/I4.png": "e22c42f7af39539b8505e3a156ec97b7",
"assets/assets/Hintergrund/D3.png": "295e2f10d5c137daf87442ebb294c76c",
"assets/assets/Hintergrund/D2.png": "d2f1ed088f6c3d085f7949e58724e598",
"assets/assets/Hintergrund/H1.png": "8fa4d0864afeb307c3fb45479e2d4f4b",
"assets/assets/Hintergrund/I5.png": "003de2c4d2ac803aed4d4c238f63fd5b",
"assets/assets/Hintergrund/C1.png": "eda1eaf7f3e6fc9bcb0c80b2b31fb231",
"assets/assets/Hintergrund/B5.png": "8f24529b7ba66b89009f70b396071a70",
"assets/assets/Hintergrund/B4.png": "2c4ed71b904c921ab8c6f8db855a5bca",
"assets/assets/Hintergrund/C2.png": "936c30bc2ed12ba122c0ea2121f97127",
"assets/assets/Hintergrund/C3.png": "ac8ebbc96028228cd637902394baa0ad",
"assets/assets/Hintergrund/B3.png": "7da0c8b7b742d2927682120eea53a3df",
"assets/assets/Hintergrund/B2.png": "5ea77ec1473b9a4a622fb4617e8a9328",
"assets/assets/Hintergrund/C4.png": "7459a8c00d7c9eaf19554c5691fcfe5b",
"assets/assets/Hintergrund/B1.png": "3a42973af50248bd2b8db5b01bc332e0",
"assets/assets/Hintergrund/C5.png": "7bfc7d67583cb7c086dc6cfc555d3157",
"assets/assets/Head3_platzhalter.png": "247b11353c3b89e9d8b2a0c3b06e55b5",
"assets/assets/kabel3.png": "d1077f039c9a9130335210b870404e78",
"assets/assets/Anleitung4.png": "e00a4f20948ecb021f6a0afd07de7abe",
"assets/assets/QnA1.png": "92b5cde7d9da1e332d896fa53708a289",
"assets/assets/Kabel2.png": "23797c6b65ff75469947e73c284dfe58",
"assets/assets/bubbel2_platzhalter.png": "924ad9413df0a5fed467e31958ce1a56",
"assets/assets/kabel4_platzhalter.png": "07ef658410300b41ac8cfb5dded51691",
"assets/assets/kabel1.png": "808a467422b56140120e0efe10fe9efd",
"assets/assets/QnA2.png": "f435a600184676cca599bc90eca71780",
"assets/assets/export/dnd_mit_hintergrund/8.png": "2312fdb182350054fc3822eca3334b89",
"assets/assets/export/dnd_mit_hintergrund/9.png": "6600c6a33ea4dc8335ddd2227abad53c",
"assets/assets/export/dnd_mit_hintergrund/14.png": "0e0564a06208e8fadc23d91a95cbfc68",
"assets/assets/export/dnd_mit_hintergrund/15.png": "30fead0cf72adb235e940af81d1d8757",
"assets/assets/export/dnd_mit_hintergrund/12.png": "2813c1c5663eab46da66382b4f5ff6fb",
"assets/assets/export/dnd_mit_hintergrund/13.png": "7d91b392d95aab4e7c54ece80c4f1cbd",
"assets/assets/export/dnd_mit_hintergrund/11.png": "656b2e21f5a6f6df9d0f2ebbdf9db2a5",
"assets/assets/export/dnd_mit_hintergrund/10.png": "2247daacd1592e09bbe5958c5223b385",
"assets/assets/export/dnd_mit_hintergrund/4.png": "5ce2c2501bcdc5a3cfad3d4ae593000a",
"assets/assets/export/dnd_mit_hintergrund/5.png": "a740e748adef9aa38c23537354176fd1",
"assets/assets/export/dnd_mit_hintergrund/7.png": "8503962c32eb2f2e73702ad5d06d555a",
"assets/assets/export/dnd_mit_hintergrund/6.png": "b9420bc62e71056db0b81cb550507369",
"assets/assets/export/dnd_mit_hintergrund/2.png": "7b956667d2d139cbd926b739bee7c582",
"assets/assets/export/dnd_mit_hintergrund/3.png": "0172e631f3820970634122a0875619c6",
"assets/assets/export/dnd_mit_hintergrund/1.png": "90ad2dc800e611d6edc2f386604365e3",
"assets/assets/export/dnd_mit_hintergrund/0.png": "0dd33c997a28303bd00819bbfb8b1553",
"assets/assets/export/puzzel/placeholder_hell.png": "ee959263dda6ca793fc81fe9810cecea",
"assets/assets/export/puzzel/15_gesamt.png": "30fead0cf72adb235e940af81d1d8757",
"assets/assets/export/puzzel/placeholder.png": "2bdf41a5f2ecfeda76864277774e64c1",
"assets/assets/export/puzzel/Felder/A1.png": "d776364aa75de1c617abe422a9e2bb49",
"assets/assets/export/puzzel/Felder/A3.png": "ee959263dda6ca793fc81fe9810cecea",
"assets/assets/export/puzzel/Felder/A2.png": "60020bd6c46c6dd35a6cfd8f8ce03328",
"assets/assets/export/puzzel/Felder/placeholder_hell.png": "ee959263dda6ca793fc81fe9810cecea",
"assets/assets/export/puzzel/Felder/A5.png": "2447944c0f6f3823f425bce84c5149b3",
"assets/assets/export/puzzel/Felder/A4.png": "db3800f711dd0a05997fa9c2c5f28ad6",
"assets/assets/export/puzzel/Felder/E2.png": "86539b41e98f79fe4ebea8d576b4bdc6",
"assets/assets/export/puzzel/Felder/E3.png": "ee959263dda6ca793fc81fe9810cecea",
"assets/assets/export/puzzel/Felder/D5.png": "1ee4250773abaa918e0719613ac1da1c",
"assets/assets/export/puzzel/Felder/E1.png": "972448dd61c84aee6cdab6e4e979d79b",
"assets/assets/export/puzzel/Felder/D4.png": "f248fd15e9e86030c18b2b58e4f61330",
"assets/assets/export/puzzel/Felder/placeholder_hell/A3.png": "180dccb631766dfcb285789644d9134b",
"assets/assets/export/puzzel/Felder/placeholder_hell/A5.png": "2447944c0f6f3823f425bce84c5149b3",
"assets/assets/export/puzzel/Felder/placeholder_hell/A4.png": "db3800f711dd0a05997fa9c2c5f28ad6",
"assets/assets/export/puzzel/Felder/placeholder_hell/D5.png": "1ee4250773abaa918e0719613ac1da1c",
"assets/assets/export/puzzel/Felder/placeholder_hell/D4.png": "f248fd15e9e86030c18b2b58e4f61330",
"assets/assets/export/puzzel/Felder/placeholder_hell/E4.png": "86e37f1ba57ea29ac51288ae0f6ac113",
"assets/assets/export/puzzel/Felder/placeholder_hell/E5.png": "eb3f6c983a143a8a09cea872ab9830e7",
"assets/assets/export/puzzel/Felder/placeholder_hell/B5.png": "7fc4129752d28389c6414689f42dabb0",
"assets/assets/export/puzzel/Felder/placeholder_hell/B4.png": "0dd96c29e304bdc41166d99f330c356b",
"assets/assets/export/puzzel/Felder/placeholder_hell/C4.png": "17309cbfb0ff3e8a491b19d6f47cf4bb",
"assets/assets/export/puzzel/Felder/placeholder_hell/C5.png": "add90821ec7c58de171ea1e8e4a4c2ae",
"assets/assets/export/puzzel/Felder/E4.png": "86e37f1ba57ea29ac51288ae0f6ac113",
"assets/assets/export/puzzel/Felder/E5.png": "eb3f6c983a143a8a09cea872ab9830e7",
"assets/assets/export/puzzel/Felder/D1.png": "0a7f8bf77a2963c8dd0a512e2d69c196",
"assets/assets/export/puzzel/Felder/D3.png": "ee959263dda6ca793fc81fe9810cecea",
"assets/assets/export/puzzel/Felder/D2.png": "4284aeb901d476b21ab75e3194116434",
"assets/assets/export/puzzel/Felder/C1.png": "89c5b3100ac28348760c2d2394682846",
"assets/assets/export/puzzel/Felder/B5.png": "7fc4129752d28389c6414689f42dabb0",
"assets/assets/export/puzzel/Felder/B4.png": "0dd96c29e304bdc41166d99f330c356b",
"assets/assets/export/puzzel/Felder/C2.png": "385a307ce9b0cb7119678bee7956ed23",
"assets/assets/export/puzzel/Felder/C3.png": "ee959263dda6ca793fc81fe9810cecea",
"assets/assets/export/puzzel/Felder/B3.png": "ee959263dda6ca793fc81fe9810cecea",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/A1.png": "d776364aa75de1c617abe422a9e2bb49",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/A3.png": "470cf9ebc5bbe6bb652f097aca2d4d2e",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/A2.png": "60020bd6c46c6dd35a6cfd8f8ce03328",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/A5.png": "62f88f6917fa93838ac22227a893340e",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/A4.png": "47b77b54d4cf39476a1855da148bd02e",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/E2.png": "86539b41e98f79fe4ebea8d576b4bdc6",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/E3.png": "0d07c89baf96e1c8bf4ab5fa2a4e298b",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/D5.png": "8aa004584c883d0265a3a7e649c6bb51",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/E1.png": "972448dd61c84aee6cdab6e4e979d79b",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/D4.png": "55b0e2ff681372cb5615d053ef8a43eb",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/E4.png": "4eb7745626c508cb71fb4ae565b55436",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/E5.png": "df92e1b200a398ff58a84beedf1cc6cd",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/D1.png": "0a7f8bf77a2963c8dd0a512e2d69c196",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/D3.png": "6c4dab7abf2c17292e2e6bd89b906ed0",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/D2.png": "4284aeb901d476b21ab75e3194116434",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/C1.png": "89c5b3100ac28348760c2d2394682846",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/B5.png": "4efb7ceb9012bfb83e2f1a7686108184",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/B4.png": "289aacbed10188d1d6c4726e6612451c",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/C2.png": "385a307ce9b0cb7119678bee7956ed23",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/C3.png": "747a7520cb64c8d6e5dfb2d09f5664ae",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/B3.png": "3b4a57c2dd50eb59eaa75b0f56fba3f3",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/B2.png": "53c2e2c7f131a0a78e3dd6776f4fcc23",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/C4.png": "cda55cdbb74ca2679821b09a1593ca82",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/B1.png": "c7f2948a3ed1c1cc05b4e55f6d6aed63",
"assets/assets/export/puzzel/Felder/Placeholder_mitbild/C5.png": "7c35370512645c9bd3f7d4f42c182e93",
"assets/assets/export/puzzel/Felder/B2.png": "53c2e2c7f131a0a78e3dd6776f4fcc23",
"assets/assets/export/puzzel/Felder/C4.png": "17309cbfb0ff3e8a491b19d6f47cf4bb",
"assets/assets/export/puzzel/Felder/B1.png": "c7f2948a3ed1c1cc05b4e55f6d6aed63",
"assets/assets/export/puzzel/Felder/C5.png": "add90821ec7c58de171ea1e8e4a4c2ae",
"assets/assets/export/puzzel/dragbilder/8.png": "24890da9c5f4b720b3a2a2854412a252",
"assets/assets/export/puzzel/dragbilder/9.png": "5fbebe6551836fdd179895cf6c75258e",
"assets/assets/export/puzzel/dragbilder/14.png": "9fa06a36700d7a12b21d5b10faa09f75",
"assets/assets/export/puzzel/dragbilder/15.png": "8b8444930f01e44ee0a4d9e3fef5f892",
"assets/assets/export/puzzel/dragbilder/17.png": "713f3423d5eb6e841b39baefa17302f5",
"assets/assets/export/puzzel/dragbilder/16.png": "04f487d67f8f743da031de43a07f71c9",
"assets/assets/export/puzzel/dragbilder/12.png": "de1c20028f38721862dc880eb7528228",
"assets/assets/export/puzzel/dragbilder/13.png": "abfa4668a1c5839197bf775c15adf5d2",
"assets/assets/export/puzzel/dragbilder/11.png": "b25c280abbab5df4f060fcbf8e875816",
"assets/assets/export/puzzel/dragbilder/10.png": "098a98b6f0fcab22c92854a6c8a0ce6d",
"assets/assets/export/puzzel/dragbilder/21.png": "2ec4f53423f51fad7404ca8c65666148",
"assets/assets/export/puzzel/dragbilder/20.png": "d1d4a8cd3235052a0768a79450185188",
"assets/assets/export/puzzel/dragbilder/22.png": "7829725000e6044ebd3512ae5f809e98",
"assets/assets/export/puzzel/dragbilder/23.png": "c21b04c969c1db080932af4012b90cc7",
"assets/assets/export/puzzel/dragbilder/18.png": "b0a335513c28e9e35f998bbf373d034d",
"assets/assets/export/puzzel/dragbilder/24.png": "aab8b2580c3115cb6971f8a0e473955d",
"assets/assets/export/puzzel/dragbilder/25.png": "822b109577e0d97bb34baa2d8a02d06c",
"assets/assets/export/puzzel/dragbilder/19.png": "eccdbafe4db348e5a3dcce27d27c6dea",
"assets/assets/export/puzzel/dragbilder/4.png": "95d460aabf9c277f8c287c3c239f58ca",
"assets/assets/export/puzzel/dragbilder/5.png": "cc3f275920acd8737d0e3c936ceb7d11",
"assets/assets/export/puzzel/dragbilder/7.png": "96443cc16e108c4ab7c627abb91440ca",
"assets/assets/export/puzzel/dragbilder/6.png": "39b2a17ec77f23c50f49b6dafc806810",
"assets/assets/export/puzzel/dragbilder/2.png": "cccd25ad3cdb0792083c1f1d51562595",
"assets/assets/export/puzzel/dragbilder/3.png": "f6e51ae5e799aea93760c93cd72526e3",
"assets/assets/export/puzzel/dragbilder/1.png": "f895efbf70d3f1b545d95e9f1d6d239e",
"assets/assets/export/puzzel/placeholder/d22.png": "345daa0effa0b99c8915d6bd40dd92f3",
"assets/assets/export/puzzel/placeholder/d23.png": "add7181ed9941f9406f5889eb52cdd40",
"assets/assets/export/puzzel/placeholder/d21.png": "461c1eb30020b120ddedef8995c7bb46",
"assets/assets/export/puzzel/placeholder/d20.png": "55ebdd1717963e36804cd85a8aa845a8",
"assets/assets/export/puzzel/placeholder/d18.png": "d14b73fc634978c212857b2b55edf440",
"assets/assets/export/puzzel/placeholder/d24.png": "9a6bc772a940f63d70b936b4bd489595",
"assets/assets/export/puzzel/placeholder/d9.png": "2fa4fdcddb6c1f6cbf41b96f71067c4f",
"assets/assets/export/puzzel/placeholder/d8.png": "fb213f6ef07aab30e10c4ddc1ac5763f",
"assets/assets/export/puzzel/placeholder/d25.png": "d05d2fba05202e8722ac01935b163cd4",
"assets/assets/export/puzzel/placeholder/d19.png": "95ad2308d17680da739fd422ce4be5ad",
"assets/assets/export/puzzel/placeholder/d17.png": "e631394940019977e0a8075095349917",
"assets/assets/export/puzzel/placeholder/d6.png": "076d8da21e0e26ebadac37aebc20445d",
"assets/assets/export/puzzel/placeholder/d7.png": "7d84a47baa506fbc130e48aa0947f6cc",
"assets/assets/export/puzzel/placeholder/d16.png": "ea1b18a6029ec961ab62427b414c47e3",
"assets/assets/export/puzzel/placeholder/d14.png": "e210befe8452816820a64f950e2ca061",
"assets/assets/export/puzzel/placeholder/d5.png": "112a82d4a2f694d30af889dd985a6a94",
"assets/assets/export/puzzel/placeholder/d4.png": "8af21f0809ab30848c53e8d339e1c581",
"assets/assets/export/puzzel/placeholder/d15.png": "b0145a2b95d116bd07c4aff64c85279c",
"assets/assets/export/puzzel/placeholder/d11.png": "c8d37a9fa50190441a47b8948cae6647",
"assets/assets/export/puzzel/placeholder/d1.png": "f33813b6cd49f243057328cb1f76b6d8",
"assets/assets/export/puzzel/placeholder/d10.png": "5fb03ad08d2ef8fa175fd90e447a1290",
"assets/assets/export/puzzel/placeholder/d12.png": "890367822a1123029df9c07eb834aad1",
"assets/assets/export/puzzel/placeholder/d3.png": "f90993c5200ac854a9259e95162e9c8f",
"assets/assets/export/puzzel/placeholder/d2.png": "e59d9036f6b3f9f6d42538e26abc1198",
"assets/assets/export/puzzel/placeholder/d13.png": "92133d31841bae1134179cc91eb3db9c",
"assets/assets/export/dnd_ohne_hintergrund/8.png": "44f6820c240ee659bcbf7ef51fdeda56",
"assets/assets/export/dnd_ohne_hintergrund/9.png": "b51d74fec76df1ddca8088489523e33e",
"assets/assets/export/dnd_ohne_hintergrund/14.png": "a3be2757aef56a2199117485aa1f99d7",
"assets/assets/export/dnd_ohne_hintergrund/15.png": "30fead0cf72adb235e940af81d1d8757",
"assets/assets/export/dnd_ohne_hintergrund/12.png": "d670ad082b4b9191a6c823c7d6ece8ed",
"assets/assets/export/dnd_ohne_hintergrund/13.png": "2cce0e60d02e50ba0beb1c741459e611",
"assets/assets/export/dnd_ohne_hintergrund/11.png": "4c121e63e09f8ca2f19c7eefc0da4e95",
"assets/assets/export/dnd_ohne_hintergrund/10.png": "8a1e0d53c7274918bf45b6b66196585c",
"assets/assets/export/dnd_ohne_hintergrund/4.png": "a798bc09aa5e1ac70b6f7216507acd45",
"assets/assets/export/dnd_ohne_hintergrund/5.png": "4fe099e768f5fcf67c62944efa22a640",
"assets/assets/export/dnd_ohne_hintergrund/7.png": "d3ae771c2463aca75a719a44af3ec9b4",
"assets/assets/export/dnd_ohne_hintergrund/6.png": "992d37f711af671d51cbc191618addb3",
"assets/assets/export/dnd_ohne_hintergrund/2.png": "519ba1fb6c1c9eadcc0bf153c053034f",
"assets/assets/export/dnd_ohne_hintergrund/3.png": "5e2775f86026789e4ef9ecaeb535cad3",
"assets/assets/export/dnd_ohne_hintergrund/1.png": "6415ed1c0726bfcf86a4a7a0cb2a1667",
"assets/assets/export/dnd_ohne_hintergrund/0.png": "96aa255d7d36bf552e46825a81c90b92",
"assets/assets/export/dnd_bedinungsanleitung/b2_export.png": "892b3ec7eb3d3942f529fcd496c9fd1d",
"assets/assets/export/dnd_bedinungsanleitung/b5_export.png": "ebd3066b8f3f7f128bf1dd30b61e9745",
"assets/assets/export/dnd_bedinungsanleitung/b3_export.png": "21a683878bddf4b0b6f5e9ad6fc41dcd",
"assets/assets/export/dnd_bedinungsanleitung/b4_export.png": "cb71a6289201fc7952cf9157f2d62309",
"assets/assets/export/dnd_bedinungsanleitung/b1_export.png": "9e1c299af3c5492da2ba3973951d3cb7",
"assets/assets/NLP_placeholder.png": "52de218e11fa19b4ba1da48ee5d43c30",
"./assets/assets/Survey/1_PH.json.bak": "45f4adad340f92a1dd696b380fb68a02",
"./assets/assets/Survey/42_UEQ2.json.bak": "50eec5a8aa0c8b3753067f44be98a1cf",
"./assets/assets/Survey/5_UEQplus.json": "79a51eb6190145826b76d191f153e831",
"./assets/assets/Survey/7_ItU2.json": "10601520db6dc7711b7a1f957e44e77d",
"./assets/assets/Survey/2_PEoU.json": "f05b8c2217e090155f1f8e864c2f8390",
"./assets/assets/Survey/43_UEQ3.json": "7011d9469c992dbe39c86e16a8487a49",
"./assets/assets/Survey/41_UEQ1.json.bak": "8f9a0ee5b925df2e015d3f4719c1fbf6",
"./assets/assets/Survey/41_UEQ1.json": "c6bd6c206aae67a39c56cecfb20d2000",
"./assets/assets/Survey/6_ItU1.json": "16ed61be8336b4dcf74c72292e8fb426",
"./assets/assets/Survey/1_PH.json": "a213309f469d858d63c415f7fff33754",
"./assets/assets/Survey/7_ItU2.json.bak": "83f7529416b88057b07b43ce20dcd44d",
"./assets/assets/Survey/42_UEQ2.json": "1e8c8cca640cce74bf0c33af287b5eff",
"./assets/assets/Survey/8_NPS.json": "6ec265c51bff9bcfbbf21c50f8795d34",
"./assets/assets/Survey/43_UEQ3.json.bak": "34799d0af99bac6a393df122b49a2618",
"./assets/assets/Survey/2_PEoU.json.bak": "c7d6d450eb7855a725f0026c44ca2016",
"./assets/assets/Survey/3_IME.json": "e1ee888a2e91342527ab30ac21cd2365",
"assets/assets/kabel5_platzhalter.png": "61490fc5d77d24aa5acc3aef36f5dfb2",
"assets/assets/Kabel2_platzhalter.png": "f837fdc3f2ebc55aa2d6d0f1101df704",
"assets/assets/bubbel1.png": "437ea0dbf3213a2e9c3d4b4431029b2f",
"assets/assets/send.png": "f5a856e4fa8c8ce5a6e4eabf385ebd94",
"assets/assets/transparent.png": "53200f9de42d57ed81d5109214977d49",
"assets/assets/SysBank.png": "99f2befa790e7fc77f617689712c2551",
"assets/assets/bubbel2.png": "299b0a351a9ed5a49a8799212945a7f0",
"assets/assets/Head2_platzhalter.png": "5b3f9b2f8b6778dd2b65188e7e8a94e9",
"assets/assets/QnA.png": "3bd445a6c5edc54eddfa4fd0bfc6e589",
"assets/assets/QnA_placeholder.png": "4f127426fe4e9589296f1a617d0bcc4f",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
