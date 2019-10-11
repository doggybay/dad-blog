
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([{
          "name": "Polly Short",
          "email": "pollyshort@skybold.com",
          "website": "Bleendot.com",
          "password": "id",
          "created_at": "2017-01-16T03:09:17 +08:00"
        },
        {
          "name": "Charles Compton",
          "email": "charlescompton@bleendot.com",
          "website": "Nspire.com",
          "password": "laboris",
          "created_at": "2014-02-14T05:42:13 +08:00"
        },
        {
          "name": "Yolanda Kinney",
          "email": "yolandakinney@nspire.com",
          "website": "Zaggles.com",
          "password": "dolore",
          "created_at": "2014-04-08T08:41:31 +07:00"
        },
        {
          "name": "Ola Blackwell",
          "email": "olablackwell@zaggles.com",
          "website": "Fibrodyne.com",
          "password": "proident",
          "created_at": "2017-12-15T06:44:34 +08:00"
        },
        {
          "name": "Kelley Weiss",
          "email": "kelleyweiss@fibrodyne.com",
          "website": "Mitroc.com",
          "password": "quis",
          "created_at": "2018-04-01T08:52:52 +07:00"
        },
        {
          "name": "Rosa Brown",
          "email": "rosabrown@mitroc.com",
          "website": "Rubadub.com",
          "password": "non",
          "created_at": "2014-11-09T09:56:02 +08:00"
        },
        {
          "name": "Meghan Lynch",
          "email": "meghanlynch@rubadub.com",
          "website": "Eventix.com",
          "password": "quis",
          "created_at": "2014-02-07T01:45:37 +08:00"
        },
        {
          "name": "Lucille Walton",
          "email": "lucillewalton@eventix.com",
          "website": "Equicom.com",
          "password": "dolor",
          "created_at": "2016-10-16T11:30:06 +07:00"
        },
        {
          "name": "Fern Neal",
          "email": "fernneal@equicom.com",
          "website": "Isologix.com",
          "password": "et",
          "created_at": "2019-04-13T08:24:33 +07:00"
        },
        {
          "name": "Judy Benjamin",
          "email": "judybenjamin@isologix.com",
          "website": "Pearlessa.com",
          "password": "do",
          "created_at": "2016-05-02T03:39:15 +07:00"
        },
        {
          "name": "Floyd Galloway",
          "email": "floydgalloway@pearlessa.com",
          "website": "Noralex.com",
          "password": "et",
          "created_at": "2017-01-03T02:13:15 +08:00"
        },
        {
          "name": "Alexis Mosley",
          "email": "alexismosley@noralex.com",
          "website": "Exotechno.com",
          "password": "sunt",
          "created_at": "2015-06-16T08:42:03 +07:00"
        },
        {
          "name": "Janie Wood",
          "email": "janiewood@exotechno.com",
          "website": "Parleynet.com",
          "password": "non",
          "created_at": "2016-01-27T09:21:21 +08:00"
        },
        {
          "name": "Shelly Workman",
          "email": "shellyworkman@parleynet.com",
          "website": "Magnafone.com",
          "password": "dolor",
          "created_at": "2017-07-13T11:56:18 +07:00"
        },
        {
          "name": "Good Charles",
          "email": "goodcharles@magnafone.com",
          "website": "Kaggle.com",
          "password": "et",
          "created_at": "2014-03-18T03:32:43 +07:00"
        },
        {
          "name": "Shepard Harrington",
          "email": "shepardharrington@kaggle.com",
          "website": "Bulljuice.com",
          "password": "cillum",
          "created_at": "2016-05-19T04:55:19 +07:00"
        },
        {
          "name": "Church Holman",
          "email": "churchholman@bulljuice.com",
          "website": "Ozean.com",
          "password": "exercitation",
          "created_at": "2014-07-24T03:32:57 +07:00"
        },
        {
          "name": "Cantu Delaney",
          "email": "cantudelaney@ozean.com",
          "website": "Miracula.com",
          "password": "deserunt",
          "created_at": "2014-06-13T05:08:28 +07:00"
        },
        {
          "name": "Brandy Allen",
          "email": "brandyallen@miracula.com",
          "website": "Canopoly.com",
          "password": "laboris",
          "created_at": "2014-02-20T11:53:31 +08:00"
        },
        {
          "name": "Washington Davidson",
          "email": "washingtondavidson@canopoly.com",
          "website": "Undertap.com",
          "password": "eiusmod",
          "created_at": "2016-09-28T11:37:38 +07:00"
        },
        {
          "name": "Janell Harper",
          "email": "janellharper@undertap.com",
          "website": "Plasto.com",
          "password": "ad",
          "created_at": "2016-12-06T06:27:32 +08:00"
        },
        {
          "name": "Wise Finley",
          "email": "wisefinley@plasto.com",
          "website": "Zensus.com",
          "password": "aliqua",
          "created_at": "2016-11-14T11:44:21 +08:00"
        },
        {
          "name": "Roseann Cabrera",
          "email": "roseanncabrera@zensus.com",
          "website": "Gonkle.com",
          "password": "anim",
          "created_at": "2015-12-25T11:55:33 +08:00"
        },
        {
          "name": "Kinney Chen",
          "email": "kinneychen@gonkle.com",
          "website": "Fiberox.com",
          "password": "eu",
          "created_at": "2019-06-28T04:01:38 +07:00"
        },
        {
          "name": "Ursula Miller",
          "email": "ursulamiller@fiberox.com",
          "website": "Medifax.com",
          "password": "laborum",
          "created_at": "2015-11-11T02:43:04 +08:00"
        },
        {
          "name": "Mcintosh Riggs",
          "email": "mcintoshriggs@medifax.com",
          "website": "Colaire.com",
          "password": "consectetur",
          "created_at": "2016-04-02T11:27:09 +07:00"
        },
        {
          "name": "Jordan Talley",
          "email": "jordantalley@colaire.com",
          "website": "Rocklogic.com",
          "password": "esse",
          "created_at": "2018-08-16T06:29:38 +07:00"
        },
        {
          "name": "Terri Rosa",
          "email": "terrirosa@rocklogic.com",
          "website": "Talae.com",
          "password": "nisi",
          "created_at": "2014-07-28T04:08:24 +07:00"
        },
        {
          "name": "Kaitlin Watts",
          "email": "kaitlinwatts@talae.com",
          "website": "Bostonic.com",
          "password": "ut",
          "created_at": "2015-05-11T06:30:38 +07:00"
        },
        {
          "name": "Sharon Sparks",
          "email": "sharonsparks@bostonic.com",
          "website": "Enquility.com",
          "password": "ex",
          "created_at": "2017-08-10T05:43:49 +07:00"
        },
        {
          "name": "Clarice Jarvis",
          "email": "claricejarvis@enquility.com",
          "website": "Lunchpod.com",
          "password": "sunt",
          "created_at": "2017-12-31T09:57:19 +08:00"
        },
        {
          "name": "Karla Cortez",
          "email": "karlacortez@lunchpod.com",
          "website": "Viocular.com",
          "password": "in",
          "created_at": "2014-10-20T04:41:46 +07:00"
        },
        {
          "name": "England Mack",
          "email": "englandmack@viocular.com",
          "website": "Senmei.com",
          "password": "ea",
          "created_at": "2015-02-01T04:12:12 +08:00"
        },
        {
          "name": "Cindy Goodman",
          "email": "cindygoodman@senmei.com",
          "website": "Entroflex.com",
          "password": "laborum",
          "created_at": "2014-02-01T12:32:04 +08:00"
        },
        {
          "name": "Day Schwartz",
          "email": "dayschwartz@entroflex.com",
          "website": "Ersum.com",
          "password": "irure",
          "created_at": "2018-08-01T05:25:57 +07:00"
        },
        {
          "name": "Marjorie Prince",
          "email": "marjorieprince@ersum.com",
          "website": "Vantage.com",
          "password": "duis",
          "created_at": "2014-01-14T02:09:45 +08:00"
        },
        {
          "name": "Isabel Small",
          "email": "isabelsmall@vantage.com",
          "website": "Valpreal.com",
          "password": "laboris",
          "created_at": "2014-05-25T01:17:20 +07:00"
        },
        {
          "name": "Short Keith",
          "email": "shortkeith@valpreal.com",
          "website": "Flotonic.com",
          "password": "aliquip",
          "created_at": "2019-07-27T01:22:34 +07:00"
        },
        {
          "name": "Lourdes Mcfadden",
          "email": "lourdesmcfadden@flotonic.com",
          "website": "Flum.com",
          "password": "culpa",
          "created_at": "2014-01-19T01:06:19 +08:00"
        },
        {
          "name": "Bette Reynolds",
          "email": "bettereynolds@flum.com",
          "website": "Poshome.com",
          "password": "dolor",
          "created_at": "2014-02-11T11:36:04 +08:00"
        },
        {
          "name": "Humphrey Owens",
          "email": "humphreyowens@poshome.com",
          "website": "Xixan.com",
          "password": "laboris",
          "created_at": "2016-08-12T07:40:51 +07:00"
        },
        {
          "name": "Gilda Barber",
          "email": "gildabarber@xixan.com",
          "website": "Genmex.com",
          "password": "nulla",
          "created_at": "2016-01-14T03:03:00 +08:00"
        },
        {
          "name": "Nikki Doyle",
          "email": "nikkidoyle@genmex.com",
          "website": "Bicol.com",
          "password": "consectetur",
          "created_at": "2019-04-09T08:11:35 +07:00"
        },
        {
          "name": "Todd Bridges",
          "email": "toddbridges@bicol.com",
          "website": "Endipine.com",
          "password": "cillum",
          "created_at": "2016-09-13T04:41:28 +07:00"
        },
        {
          "name": "Randolph Dudley",
          "email": "randolphdudley@endipine.com",
          "website": "Printspan.com",
          "password": "ex",
          "created_at": "2016-09-12T01:37:54 +07:00"
        },
        {
          "name": "Lucia Adkins",
          "email": "luciaadkins@printspan.com",
          "website": "Harmoney.com",
          "password": "et",
          "created_at": "2018-04-04T05:13:36 +07:00"
        },
        {
          "name": "Valencia Mcfarland",
          "email": "valenciamcfarland@harmoney.com",
          "website": "Elentrix.com",
          "password": "proident",
          "created_at": "2014-01-23T06:49:20 +08:00"
        },
        {
          "name": "Bartlett Beach",
          "email": "bartlettbeach@elentrix.com",
          "website": "Eternis.com",
          "password": "minim",
          "created_at": "2016-12-23T11:09:41 +08:00"
        },
        {
          "name": "Vicky Bates",
          "email": "vickybates@eternis.com",
          "website": "Uneeq.com",
          "password": "duis",
          "created_at": "2019-06-11T07:15:25 +07:00"
        },
        {
          "name": "Amelia Conway",
          "email": "ameliaconway@uneeq.com",
          "website": "Techmania.com",
          "password": "cillum",
          "created_at": "2019-07-19T08:47:51 +07:00"
        }
      ]);
    });
};
