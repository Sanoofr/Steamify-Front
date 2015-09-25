angular.module('Steamify').service('SteamContactsService',
    function () {

        this.listFriend = [
            {
                idSteam: 1,
                avatar: "http://placehold.it/50x50",
                pseudo: "San Zos",
                statut: "Dans un jeu",
                game: "Isaac",
                idGame: 1
            }, {
                idSteam: 2,
                avatar: "http://placehold.it/50x50",
                pseudo: "Dalninuk",
                statut: "En ligne",
                game: "",
                idGame: 0
            }, {
                idSteam: 3,
                avatar: "http://placehold.it/50x50",
                pseudo: "Yuk",
                statut: "Absent",
                game: "",
                idGame: 0
            }, {
                idSteam: 4,
                avatar: "http://placehold.it/50x50",
                pseudo: "Aeden",
                statut: "Hors Ligne",
                game: "",
                idGame: 0
            }

            , {
                idSteam: 1,
                avatar: "http://placehold.it/50x50",
                pseudo: "San Zos",
                statut: "Dans un jeu",
                game: "Isaac",
                idGame: 1
            }, {
                idSteam: 2,
                avatar: "http://placehold.it/50x50",
                pseudo: "Dalninuk",
                statut: "En ligne",
                game: "",
                idGame: 0
            }, {
                idSteam: 3,
                avatar: "http://placehold.it/50x50",
                pseudo: "Yuk",
                statut: "Absent",
                game: "",
                idGame: 0
            }, {
                idSteam: 4,
                avatar: "http://placehold.it/50x50",
                pseudo: "Aeden",
                statut: "Hors Ligne",
                game: "",
                idGame: 0
            }, {
                idSteam: 1,
                avatar: "http://placehold.it/50x50",
                pseudo: "San Zos",
                statut: "Dans un jeu",
                game: "Isaac",
                idGame: 1
            }, {
                idSteam: 2,
                avatar: "http://placehold.it/50x50",
                pseudo: "Dalninuk",
                statut: "En ligne",
                game: "",
                idGame: 0
            }, {
                idSteam: 3,
                avatar: "http://placehold.it/50x50",
                pseudo: "Yuk",
                statut: "Absent",
                game: "",
                idGame: 0
            }, {
                idSteam: 4,
                avatar: "http://placehold.it/50x50",
                pseudo: "Aeden",
                statut: "Hors Ligne",
                game: "",
                idGame: 0
            }, {
                idSteam: 1,
                avatar: "http://placehold.it/50x50",
                pseudo: "San Zos",
                statut: "Dans un jeu",
                game: "Isaac",
                idGame: 1
            }, {
                idSteam: 2,
                avatar: "http://placehold.it/50x50",
                pseudo: "Dalninuk",
                statut: "En ligne",
                game: "",
                idGame: 0
            }, {
                idSteam: 3,
                avatar: "http://placehold.it/50x50",
                pseudo: "Yuk",
                statut: "Absent",
                game: "",
                idGame: 0
            }, {
                idSteam: 4,
                avatar: "http://placehold.it/50x50",
                pseudo: "Aeden",
                statut: "Hors Ligne",
                game: "",
                idGame: 0
            }
        ];

        this.getDonnees = function getDonnees() {
            return this.listFriend;
        };
    }
);