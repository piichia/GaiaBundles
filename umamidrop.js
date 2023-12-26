//first is common, second is rare
let umamiList = [
    {
        name: 'Umami Drop: Cryptic Radiologist ',
        itemData: '10527296',
        contains: ['10526554','10527464']
    },
    {
        name: 'Umami Drop: Wolfsbane ',
        itemData: '10519378',
        contains: ['10518826','10519016']
    },
    {
        name: 'Umami Drop: Lightbringer ',
        itemData: '10519376',
        contains: ['10519044','10519540']
    },
    {
        name: 'Umami Drop: Cardinal Friendship',
        itemData: '10654380',
        contains: ['10651782','10654026']
    },
    {
        name: 'Umami Drop: Sióg Na Féile ',
        itemData: '10787400',
        contains: ['10786068','10786827']
    },
    {
        name: 'Umami Drop: 1UP Superstar ',
        itemData: '10507826',
        contains: ['10505336','10507038']
    },
    {
        name: 'Umami Drop: Cristallis ',
        itemData: '10579947',
        contains: ['10579794','10579950']
    },
    {
        name: 'Umami Drop: Close Memory ',
        itemData: '10588701',
        contains: ['10588185','10588647']
    },
    {
        name: 'Umami Drop: Quest Sequel ',
        itemData: '10676892',
        contains: ['10675077','10676679']
    },
    // { //weird case of 3
    //     name: 'Umami Drop: Knotted Tails ', 
    //     itemData: '10659027',
    //     contains: ['10658745','10658769','10658793']
    // },
    {
        name: 'Umami Drop: Brain Food ',
        itemData: '10649631',
        contains: ['10649583','10649004']
    },
    {
        name: 'Umami Drop: Soft Dragon ',
        itemData: '10591395',
        contains: ['10591353','10592646']
    },
    // { //3 again zzz
    //     name: 'Umami Drop: Hanazumi ',
    //     itemData: '10667877',
    //     contains: ['10667724','10667748','10667772']
    // },
    {
        name: 'Umami Drop: Kirin Maiden ',
        itemData: '10561137',
        contains: ['10560951','10561239']
    },
    {
        name: 'Umami Drop: Girl Crush ',
        itemData: '10698513',
        contains: ['10696722','10697220']
    },
    {
        name: 'Umami Drop: Close Companions ',
        itemData: '10504510',
        contains: ['10504362','10504658']
    },
    {
        name: 'Umami Drop: Wit and Wisdom ',
        itemData: '10558209',
        contains: ['10556490','10557588']
    },
    {
        name: 'Umami Drop: Feral Feline ',
        itemData: '10678488',
        contains: ['10676811','10678182']
    },
    {
        name: 'Umami Drop: Clear Day Raindrop ',
        itemData: '10509028',
        contains: ['10507692','10509078']
    },
    {
        name: 'Umami Drop: Santa Meowper ',
        itemData: '10563624',
        contains: ['10570113','10570359']
    },
    {
        name: 'Umami Drop: Blood Donor ',
        itemData: '10645122',
        contains: ['10644636','10645074']
    },
    {
        name: 'Umami Drop: Hidden Nature ',
        itemData: '10651551',
        contains: ['10651494','10651560']
    },
    {
        name: 'Umami Drop: Firefly Royalty ',
        itemData: '10519382',
        contains: ['10518762','10519158']
    },
    {
        name: 'Umami Drop: Foxfire Bride ',
        itemData: '10532538',
        contains: ['10531602','10532604']
    },
    {
        name: 'Umami Drop: Pandoras Box ',
        itemData: '10605012',
        contains: ['10603902','10604403']
    },
    {
        name: 'Umami Drop: The Cat Tower ',
        itemData: '10759338',
        contains: ['10757505','10758531']
    },
    {
        name: 'Umami Drop: Bad Joke ',
        itemData: '10688253',
        contains: ['10687893','10687947']
    },
    {
        name: 'Umami Drop: Cutie Crying Maid-chan ',
        itemData: '10510344',
        contains: ['10508318','10510256']
    },
    {
        name: 'Umami Drop: Moon of Chang`e ',
        itemData: '10533736',
        contains: ['10533332','10533844']
    },
    {
        name: 'Umami Drop: Leonis ',
        itemData: '10518472',
        contains: ['10517938','10518664']
    },
    {
        name: 'Umami Drop: Belated Blossom of the Sidhe ',
        itemData: '10562913',
        contains: ['10560390','10559136']
    },    
    {
        name: 'Umami Drop: Matrimony of Blood ',
        itemData: '10538116',
        contains: ['10537868','10538076']
    },
    {
        name: 'Umami Drop REMIX: Unconditional Affliction ',
        itemData: '10505938',
        contains: ['10498578','10500722']
    },
    {
        name: 'Umami Drop: Suit Yourself ',
        itemData: '10671975',
        contains: ['10669386','10671309']
    },   
    {
        name: 'Umami Drop: Lil` Miss Fortune ',
        itemData: '10558212',
        contains: ['10554459','10557696']
    },
    {
        name: 'Umami Drop: Daughter of the Sea ',
        itemData: '10528616',
        contains: ['10528212','10528356']
    },
    {
        name: 'Umami Drop: Moth Month ',
        itemData: '10523454',
        contains: ['10518902','10523234']
    },
    {
        name: 'Umami Drop: Fae la Lune ',
        itemData: '10563618',
        contains: ['10559820','10563132']
    },
    {
        name: 'Umami Drop: Papillon Mystique ',
        itemData: '10674081',
        contains: ['10671945','10673565']
    },
    {
        name: 'Umami Drop: Unconditional Affliction ',
        itemData: '10502076',
        contains: ['10497378','10501374']
    },
    {
        name: 'Umami Drop: Sakana Matsuri ',
        itemData: '10523452',
        contains: ['10521278','10523270']
    },
    {
        name: 'Umami Drop: Dreamkeeper ',
        itemData: '10558206',
        contains: ['10557567','10557756']
    },
    {
        name: 'Umami Drop: Sheval ',
        itemData: '10947054',
        contains: ['10938624','10939740']
    },
    {
        name: 'Umami Drop: The Hanged Woman ',
        itemData: '10759341',
        contains: ['10757337','10758240']
    },
    {
        name: 'Umami Drop: Buxom Brute ',
        itemData: '10538972',
        contains: ['10538528','10539502']
    },
    {
        name: 'Umami Drop: Haunt of Rose ',
        itemData: '10544792',
        contains: ['10544166','10544668']
    },
    {
        name: 'Umami Drop: Soultaker ',
        itemData: '10545692',
        contains: ['10544754','10544828']
    },
    {
        name: 'Umami Drop: Nobilibee ',
        itemData: '10519380',
        contains: ['10518432','10519226']
    },
    {
        name: 'Umami Drop: Estival Sol ',
        itemData: '10919763',
        contains: ['10916049','10917804']
    },
    {
        name: 'Umami Drop: Ichigo Sandwitch ',
        itemData: '11014380',
        contains: ['11014269','11014314']
    },
    {
        name: 'Umami Drop: Sanctum Sophia ',
        itemData: '10707315',
        contains: ['10705080','10707135']
    },
    {
        name: 'Umami Drop: Catbitual Grin ',
        itemData: '10515316',
        contains: ['10515142','10515680']
    },
    {
        name: 'Umami Drop: Kira Kira Magica ',
        itemData: '10690662',
        contains: ['10690218','10690626']
    },
    {
        name: 'Umami Drop: Lapine Danseuse ',
        itemData: '10626000',
        contains: ['10625871','10625949']
    },
    {
        name: 'Umami Drop: The Leech King ',
        itemData: '10749483',
        contains: ['10747068','10748016']
    },
    {
        name: 'Umami Drop: NezuMimi ',
        itemData: '10666068',
        contains: ['10666011','10666074']
    },
    {
        name: 'Umami Drop: Her Hymn ',
        itemData: '10563621',
        contains: ['10559892','10569825']
    },
    {
        name: 'Umami Drop: The Hermit ',
        itemData: '10759335',
        contains: ['10746192','10750272']
    },
    {
        name: 'Umami Drop: Void Vessel ',
        itemData: '10749900',
        contains: ['10744251','10748412']
    },
    {
        name: 'Umami Drop: Beautiful Specimen ',
        itemData: '10702977',
        contains: ['10702335','10702842']
    },
    {
        name: 'Umami Drop: Cheeps ',
        itemData: '10605807',
        contains: ['10605567','10605711']
    },
    {
        name: 'Umami Drop: Infinite Nightmare ',
        itemData: '10558203',
        contains: ['10556550','10557858']
    },
    {
        name: 'Umami Drop: Goddess of Gaia ',
        itemData: '10560126',
        contains: ['10559946','10560222']
    },
    {
        name: 'Umami Drop: Dragonberry ',
        itemData: '10562586',
        contains: ['10559724','10560507']
    },
    {
        name: 'Umami Drop: Miss Witch ',
        itemData: '10669686',
        contains: ['10669455','10669902']
    },
    {
        name: 'Umami Drop: Lifegiver ',
        itemData: '10656948',
        contains: ['10657353','10657488']
    },
    {
        name: 'Umami Drop: Justice ',
        itemData: '10759344',
        contains: ['10760340','10760352']
    },
    {
        name: 'Umami Drop: Im Alien ',
        itemData: '10752444',
        contains: ['10751664','10752234']
    },
    {
        name: 'Umami Drop: Batty Seclusion ',
        itemData: '10644012',
        contains: ['10643970','10643991']
    },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },

    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },

    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },

    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },

    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },

    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },

    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },

    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
    // {
    //     name: '',
    //     itemData: '',
    //     contains: ['','']
    // },
]