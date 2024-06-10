// async function fetchData(
//     userId,
//     name,
//     avatarURL = 'https://images-eds-ssl.xboxlive.com/image?url=Q_rwcVSTCIytJ0KOzcjWTYl.n38D8jlKWXJx7NRJmQKBAEDCgtTAQ0JS02UoaiwRCHTTX1RAopljdoYpOaNfVf5nBNvbwGfyR5n4DAs0DsOwxSO9puiT_GgKqinHT8HsW8VYeiiuU1IG3jY69EhnsQ--&format=source'
// ) {
//     try {
//         const response = await fetch(`http://192.168.31.63:3000/api/userData/${userId}`).catch(
//             (e) => null
//         );

//         if (!response) {
//             return {
//                 userName: `${name}`,
//                 avatar: `${avatarURL}`,
//             };
//         }

//         const user = await response.json();

//         return {
//             userName: `${user.userName}`,
//             avatar: `${user.avatarUrl}`,
//         };
//     } catch (error) {
//         console.log(error);
//     }
// }

// (async () => {})();
