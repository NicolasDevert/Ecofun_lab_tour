var APP_DATA = {
  "scenes": [
    {
      "id": "0-couloir-1",
      "name": "couloir 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 3.100345190845066,
          "pitch": 0.05784407151983473,
          "rotation": 0,
          "target": "3-couloir2"
        },
        {
          "yaw": 2.7121676824621908,
          "pitch": 0.1254224827657726,
          "rotation": 4.71238898038469,
          "target": "1-labo-sol"
        },
        {
          "yaw": -2.652974835719231,
          "pitch": 0.13832575278067338,
          "rotation": 1.5707963267948966,
          "target": "2-salle-extraction"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-labo-sol",
      "name": "labo sol",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1259035192868847,
          "pitch": 0.046230063122562726,
          "rotation": 0,
          "target": "0-couloir-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salle-extraction",
      "name": "salle extraction",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20577972088104524,
          "pitch": -0.0021737259009206866,
          "rotation": 0,
          "target": "0-couloir-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-couloir2",
      "name": "couloir2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.028859507500516912,
          "pitch": 0.026629545798467547,
          "rotation": 0,
          "target": "0-couloir-1"
        },
        {
          "yaw": -2.221491286454331,
          "pitch": 0.13853412158817058,
          "rotation": 0.7853981633974483,
          "target": "4-salle-de-montage"
        },
        {
          "yaw": 3.026646187318762,
          "pitch": 0.022459709371517533,
          "rotation": 4.71238898038469,
          "target": "6-labo-isotope"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salle-de-montage",
      "name": "salle de montage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14334765394996474,
          "pitch": 0.054889875076925776,
          "rotation": 0,
          "target": "3-couloir2"
        },
        {
          "yaw": 2.059294994820843,
          "pitch": 0.012273537361245701,
          "rotation": 0,
          "target": "5-atelier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-atelier",
      "name": "atelier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.025679366212925,
          "pitch": 0.05781203352494657,
          "rotation": 5.497787143782138,
          "target": "4-salle-de-montage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-labo-isotope",
      "name": "labo isotope",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2876752916446659,
          "pitch": 0.198491446212536,
          "rotation": 0,
          "target": "3-couloir2"
        },
        {
          "yaw": 0.7992931083485502,
          "pitch": 0.2453910294131738,
          "rotation": 0.7853981633974483,
          "target": "7-stockage-de-gaz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-stockage-de-gaz",
      "name": "stockage de gaz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.062096264913984456,
          "pitch": 0.06639124088942694,
          "rotation": 0,
          "target": "6-labo-isotope"
        },
        {
          "yaw": -1.4527158291472624,
          "pitch": 0.0593531529296456,
          "rotation": 0,
          "target": "8-labo-gaz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-labo-gaz",
      "name": "labo gaz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5621258527544466,
          "pitch": 0.31454328787860497,
          "rotation": 0.7853981633974483,
          "target": "7-stockage-de-gaz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
