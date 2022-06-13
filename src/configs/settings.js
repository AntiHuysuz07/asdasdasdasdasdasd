/**
 * Client Settings
 * @param { Client } client 
 */

 module.exports = (client) => {

    //General Settings
    client.settings = {

        Prefix: ".",
        Token: "",
        Owners: ["788202103255597117"],
        OtherBots: [],
        VoiceChannel: "985517225140179004",
        Activity: "LISTENING",
        Status: "idle",
        MongoURL: "mongodb+srv://alper3131313:alper3131313@cluster0.2x2m4.mongodb.net/?retryWrites=true&w=majority",
        Footer: "Mavi Kurt Kingdom",
        DisableCooldownsForAdmins: true,

    };

    //Activity Messages
    client.statusMessages = [

        "Maviş Kurt",
        "Mavi Kurt",
        "MaVİŞ Kuş"

    ];

    //Emojis
    client.systemEmojis = [

        ///System
        { emojiName: 'developer', emojiUrl: 'https://cdn.discordapp.com/emojis/853642013332865035.gif?v=1' },
        { emojiName: 'loading', emojiUrl: 'https://cdn.discordapp.com/emojis/857935194203226118.gif?v=1' },
        { emojiName: 'arrow', emojiUrl: 'https://cdn.discordapp.com/emojis/821298641863442442.gif?v=1' },
        { emojiName: 'crown', emojiUrl: 'https://cdn.discordapp.com/emojis/876942324909871114.gif?v=1' },
        { emojiName: 'crown2', emojiUrl: 'https://cdn.discordapp.com/emojis/876929331572662323.gif?v=1' },
        { emojiName: 'mark', emojiUrl: 'https://cdn.discordapp.com/emojis/876153262796079115.gif?v=1' },
        { emojiName: 'mark2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641429146140684.png?v=1' },
        { emojiName: 'cross', emojiUrl: 'https://cdn.discordapp.com/emojis/876153078863253514.gif?v=1' },
        { emojiName: 'cross2', emojiUrl: 'https://cdn.discordapp.com/emojis/853641452227264522.png?v=1' },
        { emojiName: 'success', emojiUrl: 'https://cdn.discordapp.com/emojis/793774156067373066.gif?v=1' },

        ///Status
        { emojiName: 'online', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950275698692.png?v=1' },
        { emojiName: 'dnd', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950355390545.png?v=1' },
        { emojiName: 'idle', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950069915667.png?v=1' },
        { emojiName: 'offline', emojiUrl: 'https://cdn.discordapp.com/emojis/686601950686609420.png?v=1' },
        { emojiName: 'web', emojiUrl: 'https://cdn.discordapp.com/emojis/825429354707288065.png?v=1' },

        ///Penal
        { emojiName: 'banned', emojiUrl: 'https://cdn.discordapp.com/emojis/748618263071555645.gif?v=1' },
        { emojiName: 'jailed', emojiUrl: 'https://cdn.discordapp.com/emojis/878303820181024788.png?v=1' },
        { emojiName: 'chatMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/878303318743609384.png?v=1' },
        { emojiName: 'warned', emojiUrl: 'https://cdn.discordapp.com/emojis/826369282942042112.png?v=1' },

        ///Voice
        { emojiName: 'joined', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545977794560.gif?v=1' },   
        { emojiName: 'leaved', emojiUrl: 'https://cdn.discordapp.com/emojis/742688545168293968.gif?v=1' },
        { emojiName: 'unMuted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450633564271.png?v=1' },
        { emojiName: 'muted', emojiUrl: 'https://cdn.discordapp.com/emojis/871710451086524416.png?v=1' },
        { emojiName: 'unDeafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450243502091.png?v=1' },
        { emojiName: 'deafen', emojiUrl: 'https://cdn.discordapp.com/emojis/871710450138619915.png?v=1' },
        { emojiName: 'camera', emojiUrl: 'https://cdn.discordapp.com/emojis/839043294717542400.png?v=1' }

    ];

    //Guild Settings     
    client.guildSettings = {

      ///General
      guildID: "985489977137844224",
      guildTags: [],
      guildDiscriminator: "",
      guildTeams: [],
      meetRole: "985489977234300941",
      meetChannel: "985514736147898378",
      nameTag: "",
      dmMessages: true,
      unAuthorizedMessages: true,

      ///Staffs
      staffRoles: ["985489977217515592"],
      transporterSpears: ["985489977234300943"],
      registerSpears: ["985489977234300944"],
      staffGiver: "985489977280462853",
      botYt: "985489977280462857",

      ///Penals
      penals: {

          ///Ban
          ban: {
              staffs: ["985489977234300947"],
              penalPoint: 40,
              penalLimit: 5,
              log: "985489978316447804",
              banGifs: ['https://media1.tenor.com/images/ed33599ac8db8867ee23bae29b20b0ec/tenor.gif?itemid=14760307', 'https://media.giphy.com/media/fe4dDMD2cAU5RfEaCU/giphy.gif', 'https://media1.tenor.com/images/4732faf454006e370fa9ec6e53dbf040/tenor.gif?itemid=14678194'],
              unbanGifs: ['https://data.whicdn.com/images/192611812/original.gif'],
          },

          ///Jail
          jail: {
              staffs: ["985489977234300946"],
              jailRoles: ["985489977204944952"],
              jailChannel: "985489978119323696",
              penalPoint: 30,
              penalLimit: 5,
              log: "985489978119323697",
          },



///Chat Mute
          chatMute: {
              staffs: ["985489977234300945"],
              cmuteRoles: ["985489977179775033"],
              penalPoint: 20,
              penalLimit: 5,
              log: "985489978119323697",
          },

          ///Voice Mute
          voiceMute: {
              staffs: ["985489977234300945"],
              vmuteRoles: ["985489977179775033"],
              penalPoint: 20,
              penalLimit: 5,
              log: "985489978119323697",
          },

          ///Warn
          warn: {
              staffs: ["985489977251098628"],
              warnRoles: [{
                  warnCount: 1,
                  warnRole: "", 
              }, {
                  warnCount: 2,
                  warnRole: "",
              }, {
                  warnCount: 3,
                  warnRole: "",
              }],
              penalPoint: 10,
              log: "985489978119323697",
          },

      },

      ///Registration
      registration: {
          unregisterName: "",
          unregisterRoles: [],
          unregisterChannel: "",
          quarantineRole: "",
          familyRole: "",
      },

      ///Forbidden Tag
      forbiddenTag: {
          forbidRoles: [],
          forbidChannel: "",
          forbidLog: "",
      },
        ///Logs
        logs: {
            pointLog: "985489978119323697",
            voiceLog: "985489978119323697",
            messageLog: "985489978119323697",
            securityLog: "985489978119323697",
        },

    };

};