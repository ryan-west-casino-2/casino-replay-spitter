<?php

namespace App\Models;

use App\Models\RedtigerRound;
use Illuminate\Database\Eloquent\Model as Eloquent;

class RedtigerData extends Eloquent
{
    protected $table = 'redtiger_data';
    public $timestamps = false;
    protected $connection = 'pgsql';
    protected $primaryKey = 'id';


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'round_id',
        'round_data',
        'step',
    ];

    protected $hidden = [
        'id',
        'round_id',
    ];

     protected $casts = [
        'round_data' => 'object',
    ];

    public function round_id()
    {
        return $this->belongsTo(RedtigerRound::class, 'round_id');
    }

    public function get_by_rid($round_id) {

    }

    public function game_builder()
    {
/*

{
  "success": true,
  "result": {
    "transactions": {
      "roundId": 581576192
    },
    "user": {
      "balance": {
        "cash": {
          "atStart": 7540.9,
          "afterBet": 7542.9,
          "atEnd": 7541.7
        },
        "freeBets": {
          "atStart": "0.00",
          "afterBet": "0.00",
          "atEnd": "0.00"
        },
        "bonus": {
          "atStart": "0.00",
          "afterBet": "0.00",
          "atEnd": "0.00"
        },
        "sessionCash": {
          "atStart": "0.00",
          "afterBet": "0.00",
          "atEnd": "0.00"
        },
        "sessionFreeBets": {
          "atStart": "0.00",
          "afterBet": "0.00",
          "atEnd": "0.00"
        }
      },
      "canGamble": false,
      "userId": 1750255,
      "sessionId": "97f52d53-e15c-449d-80ab-be00500cbc1d",
      "sessionNetPosition": "-56.80",
      "token": "c8def3d4ff1745a2b2d354d3ba2e253c612ceeb27b62fa048cb9a363f2c0b7fe4ef60fb6e32a1cbef6ecd21d9bee1956926b20e933403766bc95e377f849885d",
      "bonuses": [],
      "tournaments": [],
      "vouchers": [],
      "messages": [],
      "limits": {
        "betThresholdTime": 923
      },
      "serverTime": "2022-12-11 21:09:48"
    },
    "game": {
      "win": {
        "lines": "0.80",
        "total": "0.80"
      },
      "stake": "2.00",
      "multiplier": 1,
      "winLines": [
        {
          "index": 0,
          "start": 0,
          "length": 3,
          "tiles": [
            1,
            1,
            1,
            0,
            0
          ],
          "tile": 3,
          "multiplier": 1,
          "amount": "0.20"
        },
        {
          "index": 1,
          "start": 0,
          "length": 3,
          "tiles": [
            1,
            1,
            1,
            0,
            0
          ],
          "tile": 3,
          "multiplier": 1,
          "amount": "0.20"
        },
        {
          "index": 10,
          "start": 0,
          "length": 3,
          "tiles": [
            1,
            1,
            1,
            0,
            0
          ],
          "tile": 3,
          "multiplier": 1,
          "amount": "0.20"
        },
        {
          "index": 11,
          "start": 0,
          "length": 3,
          "tiles": [
            1,
            1,
            1,
            0,
            0
          ],
          "tile": 3,
          "multiplier": 1,
          "amount": "0.20"
        }
      ],
      "nearMiss": [],
      "reelsBuffer": [
        [
          [
            8,
            1,
            2,
            7,
            2,
            8,
            3,
            3,
            3,
            3
          ],
          [
            3,
            3,
            2,
            2
          ],
          [
            2,
            3,
            2,
            1,
            2,
            3,
            2,
            2,
            3,
            3
          ]
        ],
        [
          [
            8,
            6,
            7,
            6,
            1,
            8,
            8,
            3,
            2,
            2
          ],
          [
            3,
            1,
            3,
            8
          ],
          [
            1,
            6,
            2,
            1,
            3,
            1,
            2,
            6,
            3,
            3
          ]
        ],
        [
          [
            2,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            1,
            6
          ],
          [
            3,
            6,
            1,
            2
          ],
          [
            3,
            2,
            1,
            6,
            7,
            2,
            6,
            7,
            1,
            7
          ]
        ],
        [
          [
            1,
            9,
            1,
            3,
            1,
            6,
            2,
            7,
            7,
            2
          ],
          [
            6,
            8,
            1,
            7
          ],
          [
            9,
            2,
            3,
            6,
            7,
            7,
            7,
            1,
            6,
            8
          ]
        ],
        [
          [
            7,
            7,
            2,
            1,
            8,
            7,
            1,
            8,
            9,
            1
          ],
          [
            6,
            1,
            2,
            6
          ],
          [
            7,
            6,
            1,
            7,
            2,
            1,
            2,
            8,
            2,
            1
          ]
        ]
      ],
      "features": [],
      "hasState": false
    },
    "jackpots": null,
    "bonusChance": null
  }
}
*/




    }


}
