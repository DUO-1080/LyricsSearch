import React, { Component } from "react";
// import Axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
  };

  componentDidMount() {
    // Axios.get(
    //   `https://cors-anywhere.herokuapp.com/${process.env.REACT_APP_LYRIC_BASE_URL}chart.tracks.get?
    //   chart_name=top&page=1&page_size=10&country=zh&f_has_lyrics=1&apikey=${process.env.REACT_APP_LYRIC_KEY}`
    // )
    //   .then((res) => {
    //     console.log(res.data.message.body.track_list);
    //     this.setState({
    //       track_list: res.data.message.body.track_list,
    //     });
    //   })
    //   .catch((err) => console.log(err));
    setTimeout(() => {
      this.setState({
        track_list: [
          {
            track: {
              track_id: 196403687,
              track_name: "Stuck With U (with Justin Bieber)",
              track_name_translation_list: [],
              track_rating: 100,
              commontrack_id: 110409326,
              instrumental: 0,
              explicit: 0,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 1,
              num_favourite: 348,
              album_id: 37959199,
              album_name: "Stuck with U",
              artist_id: 45255120,
              artist_name: "Ariana Grande feat. Justin Bieber",
              track_share_url:
                "https://www.musixmatch.com/lyrics/Ariana-Grande-Justin-Bieber/Stuck-With-U-with-Justin-Bieber?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/Ariana-Grande-Justin-Bieber/Stuck-With-U-with-Justin-Bieber/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2020-05-15T04:42:51Z",
              primary_genres: {
                music_genre_list: [],
              },
            },
          },
          {
            track: {
              track_id: 196414475,
              track_name: "GOOBA",
              track_name_translation_list: [],
              track_rating: 100,
              commontrack_id: 110414667,
              instrumental: 0,
              explicit: 1,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 1,
              num_favourite: 155,
              album_id: 37962159,
              album_name: "GOOBA - Single",
              artist_id: 34330242,
              artist_name: "6ix9ine",
              track_share_url:
                "https://www.musixmatch.com/lyrics/6IX9INE/GOOBA?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/6IX9INE/GOOBA/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2020-05-10T16:08:46Z",
              primary_genres: {
                music_genre_list: [
                  {
                    music_genre: {
                      music_genre_id: 1072,
                      music_genre_parent_id: 18,
                      music_genre_name: "Hardcore Rap",
                      music_genre_name_extended: "Hip Hop/Rap / Hardcore Rap",
                      music_genre_vanity: "Hip-Hop-Rap-Hardcore-Rap",
                    },
                  },
                ],
              },
            },
          },
          {
            track: {
              track_id: 194169151,
              track_name: "Blinding Lights",
              track_name_translation_list: [],
              track_rating: 100,
              commontrack_id: 104185748,
              instrumental: 0,
              explicit: 0,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 1,
              num_favourite: 3702,
              album_id: 37216011,
              album_name: "After Hours",
              artist_id: 13937035,
              artist_name: "The Weeknd",
              track_share_url:
                "https://www.musixmatch.com/lyrics/The-Weeknd-3/Blinding-Lights?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/The-Weeknd-3/Blinding-Lights/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2020-04-10T08:31:57Z",
              primary_genres: {
                music_genre_list: [
                  {
                    music_genre: {
                      music_genre_id: 7,
                      music_genre_parent_id: 34,
                      music_genre_name: "Electronic",
                      music_genre_name_extended: "Electronic",
                      music_genre_vanity: "Electronic",
                    },
                  },
                ],
              },
            },
          },
          {
            track: {
              track_id: 195445553,
              track_name: "ROCKSTAR (feat. Roddy Ricch)",
              track_name_translation_list: [],
              track_rating: 100,
              commontrack_id: 109586143,
              instrumental: 0,
              explicit: 1,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 1,
              num_favourite: 163,
              album_id: 37641727,
              album_name: "BLAME IT ON BABY",
              artist_id: 45035319,
              artist_name: "DaBaby feat. Roddy Ricch",
              track_share_url:
                "https://www.musixmatch.com/lyrics/DaBaby-Roddy-Ricch/ROCKSTAR-Roddy-Ricch?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/DaBaby-Roddy-Ricch/ROCKSTAR-Roddy-Ricch/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2020-04-20T07:26:06Z",
              primary_genres: {
                music_genre_list: [],
              },
            },
          },
          {
            track: {
              track_id: 195842213,
              track_name: "Savage Remix (feat. Beyoncé)",
              track_name_translation_list: [],
              track_rating: 100,
              commontrack_id: 109927689,
              instrumental: 0,
              explicit: 1,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 1,
              num_favourite: 146,
              album_id: 37763168,
              album_name: "Savage Remix (feat. Beyoncé) - Single",
              artist_id: 45138159,
              artist_name: "Megan Thee Stallion feat. Beyoncé",
              track_share_url:
                "https://www.musixmatch.com/lyrics/Megan-Thee-Stallion-Beyonc%C3%A9/Savage-Beyonc%C3%A9-Remix?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/Megan-Thee-Stallion-Beyonc%C3%A9/Savage-Beyonc%C3%A9-Remix/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2020-04-30T15:03:57Z",
              primary_genres: {
                music_genre_list: [],
              },
            },
          },
          {
            track: {
              track_id: 196320084,
              track_name: "Six Feet Apart",
              track_name_translation_list: [],
              track_rating: 98,
              commontrack_id: 110324387,
              instrumental: 0,
              explicit: 1,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 0,
              num_favourite: 9,
              album_id: 37938375,
              album_name: "Six Feet Apart - Single",
              artist_id: 27658352,
              artist_name: "Luke Combs",
              track_share_url:
                "https://www.musixmatch.com/lyrics/Luke-Combs/Six-Feet-Apart?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/Luke-Combs/Six-Feet-Apart/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2020-05-04T14:51:20Z",
              primary_genres: {
                music_genre_list: [
                  {
                    music_genre: {
                      music_genre_id: 34,
                      music_genre_parent_id: 0,
                      music_genre_name: "Music",
                      music_genre_name_extended: "Music",
                      music_genre_vanity: "Music",
                    },
                  },
                ],
              },
            },
          },
          {
            track: {
              track_id: 192206835,
              track_name: "Intentions (feat. Quavo)",
              track_name_translation_list: [],
              track_rating: 99,
              commontrack_id: 106881942,
              instrumental: 0,
              explicit: 0,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 1,
              num_favourite: 2113,
              album_id: 36270367,
              album_name: "R&Bieber - EP",
              artist_id: 33491916,
              artist_name: "Justin Bieber",
              track_share_url:
                "https://www.musixmatch.com/lyrics/Justin-Bieber-Quavo/Intentions?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/Justin-Bieber-Quavo/Intentions/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2020-03-22T17:33:38Z",
              primary_genres: {
                music_genre_list: [
                  {
                    music_genre: {
                      music_genre_id: 34,
                      music_genre_parent_id: 0,
                      music_genre_name: "Music",
                      music_genre_name_extended: "Music",
                      music_genre_vanity: "Music",
                    },
                  },
                ],
              },
            },
          },
          {
            track: {
              track_id: 183885253,
              track_name: "Roses - Imanbek Remix",
              track_name_translation_list: [],
              track_rating: 100,
              commontrack_id: 100333438,
              instrumental: 0,
              explicit: 1,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 1,
              num_favourite: 127,
              album_id: 34856945,
              album_name: "Roses (Imanbek Remix) - Single",
              artist_id: 40482878,
              artist_name: "SAINt JHN feat. Imanbek",
              track_share_url:
                "https://www.musixmatch.com/lyrics/SAINt-JHN/Roses-Imanbek-Remix?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/SAINt-JHN/Roses-Imanbek-Remix/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2019-12-06T09:52:59Z",
              primary_genres: {
                music_genre_list: [],
              },
            },
          },
          {
            track: {
              track_id: 192324206,
              track_name: "One Margarita",
              track_name_translation_list: [],
              track_rating: 98,
              commontrack_id: 107705631,
              instrumental: 0,
              explicit: 0,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 1,
              num_favourite: 12,
              album_id: 36710192,
              album_name: "Born Here Live Here Die Here",
              artist_id: 360257,
              artist_name: "Luke Bryan",
              track_share_url:
                "https://www.musixmatch.com/lyrics/Luke-Bryan/One-Margarita?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/Luke-Bryan/One-Margarita/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2020-03-13T08:54:41Z",
              primary_genres: {
                music_genre_list: [
                  {
                    music_genre: {
                      music_genre_id: 34,
                      music_genre_parent_id: 0,
                      music_genre_name: "Music",
                      music_genre_name_extended: "Music",
                      music_genre_vanity: "Music",
                    },
                  },
                ],
              },
            },
          },
          {
            track: {
              track_id: 184014421,
              track_name: "Memories",
              track_name_translation_list: [],
              track_rating: 99,
              commontrack_id: 100364992,
              instrumental: 0,
              explicit: 0,
              has_lyrics: 1,
              has_subtitles: 1,
              has_richsync: 1,
              num_favourite: 10759,
              album_id: 34887164,
              album_name: "Memories - Single",
              artist_id: 27840,
              artist_name: "Maroon 5",
              track_share_url:
                "https://www.musixmatch.com/lyrics/Maroon-5/Memories?utm_source=application&utm_campaign=api&utm_medium=",
              track_edit_url:
                "https://www.musixmatch.com/lyrics/Maroon-5/Memories/edit?utm_source=application&utm_campaign=api&utm_medium=",
              restricted: 0,
              updated_time: "2019-09-20T07:54:22Z",
              primary_genres: {
                music_genre_list: [
                  {
                    music_genre: {
                      music_genre_id: 34,
                      music_genre_parent_id: 0,
                      music_genre_name: "Music",
                      music_genre_name_extended: "Music",
                      music_genre_vanity: "Music",
                    },
                  },
                ],
              },
            },
          },
        ],
      });
    }, 1500);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
