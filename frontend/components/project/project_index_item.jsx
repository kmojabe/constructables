import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {

  render() {
    let temp_img = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQEhEVFRISEBAVEBUVFRAQFRUVFRUWFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGBAQFysdHR0tLS0rKy0rLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS03Ny0tLTctLTctLS0tLS0tNystN//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADwQAAIBAgMEBwUGBQUBAAAAAAABAgMRBAUhEjFBUQYTIjJhcYEzUnKRoRQjQrHB0RVDYnOSU6Lh8PGC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EACgRAAICAQQBBQADAQEBAAAAAAABAhEDBBIhMUEFEyIyURQzcWGBI//aAAwDAQACEQMRAD8A+RgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9AAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADKMG9yYAUQDxqwB4AAD0A8APbACwAAPAAAAAAAAAAAAAAAAAAAAAAAAADKCu7DgiywwOVTqOyXm+Bxnlo5TyUdNhej0IpbV2/DQySzs4PKyQ8jo+79SvvSK+6zRX6O0n3dPqWjnaLLMUmO6Ozgm0rrw3mmGdM7xyplJUpuOjO6kmdU7MqVFyDdBuiywuSTm9I6W46HKWZI5vKizodF+crfU4/wAg5POZ4jo27aO/pYLUWFnKLG5ZOm9xojlTO8ciZAaOh0PAQAAAAAAAAAAAAAAAAAAAD0AB8IM6LI+jrlapU3cEYsubwjLkyLpHWUaSirJWM0pNmduzMoVDklxsWpk0zFVY+9H5obX+E7TK4SaI5RTZvlCn24JbXFcztDK1wdYZGuDHJcLSavs9pb7/ALFsk5UWySdF2lYzW2cLPSBR4yaFI0YnCxqKzXkXjKmWTo4bOsE6U2b8c9xsxysrTsdWAAAAAAAAAAAAAAAAAAAAAXvR/JutfWS7qfzM2bJXBny5KO1iraGC7ZjfLNGKxcaau36FoxLxiQIV61Z9lbEfHedWox7L8RMllLfeqyfqyN6XRG9GccmguL+ZHusj3EHl849ypLybbJ3x8k70YwxVSnpUjdX3oUnyhSfJHjWjCspRa2Z7y0o2izjaLGrmNOO+Xy1OXtyOXtswWbU3ub/xZPtst7Y/itP+r/Fke2PbPaeaU3+L5qxPtkOBUdJVCajJNPen+howuSO2Hg5KUWjZyazEAAAAAAAAAAAAAAAAAAMg3YaltvZW9uy8+BWctqsiT2o+hZXhFSpxhyWvnxPNyvczDkdslnPwU8EeeDg5bbV39CykyUzekR32Oz0j/CpjOaW9pEpSZNEeeYUlvn9Gy3t2WUTD7fSel/oydjXQcX4KjNMPSdqlOWq3x13HaFnaFk7K3QqR7MFdb09WUna8lJcFlChFbopehx3yZz3MSjHjb1Jti2R6sKL3qJbklWQquCw1TTas/DRFlOSL20aMZ0fpyX3cl5N3bOsc0r5LxytM5jMME6TtZ/n9TVGe40RnZELlzwAAAAAAAAAAAAAAGdOm5aJXFoJpHQ9E8vvN1JLuXSXjzMmfIZs07OvMRlAugBYownUUdW0i1Nk7Svnj3N7NPRcZP9DpGBdRIMtluzlKrLw7pfhF+CTTw9R7qUF5oi4/pDaNv2Opyh8iN0f0jcjXPD1Fq6cGvBBSX6E1+kSrGMHtwTpzW9cJeBbiRakyQsznUj2Uo82x7aRGxEdyUt8p1H4aDgng3QoS/DR/yG5C0ZvC1P8ASiRuRG5Hjwslvg18LG5C0QsVhVPSTkvPU6QmkXjJI57H4bYemqNMXZoi7IpcseAAAAAAAAAAAAypwu7c2HwHwdZlGV9hzd0raLmY55XupGSWT5UWeRQSp3S3yl+bOGR8nPJ2WRyOZ45W1AK/E4+LVoVLPmr/ALHZROiiQO++7Oo/G1i/RfhdkyngJT9o7R4QW4q8i8FZTXgsKVKMFaKsjk232cm2ZkEAiiKBJJhVpqSs1wJi2mWUqKjLMLDbnCUdU9PI7SfBdyZcxiluVjjZzsyuVIPCQLgHkop70LoWynznKoyi5pWstTRiyuzvjyNM4mtT2W1yNy6Nq5RgSAAAAAAAAADOC1ALzIsAqk1potZfsZ82SlRxzTo7Fw7OyuVjDF88mK+bNWBw/Vx2XzbE3ZMnZIKkGFWG0muaaJUqZKdFfhMsqJ7KnFRvoaYSUuDo5KiXi8HXw2s0p0/eit3mdsmle1NFNykbKVVSV07owyi06KuJmRTRAAAAADfEjlsJclRha0XXk76WsvE7uDSOrXBbpnLac6BBAFCgBR45rmhy/BNMiYzFwcXG921uWp1jCV8Isk7OFzNrbdvU9CFpcm+HRDLUWAAAAAAAAANuHhtOxVukQ3SO+yXB9VTSe96s87LK2YMkrZYI5FAAAASiAQuGHyXOT4jrG6U0nGx62jyuVplJKujTmHRSDe3Rk6cuS3fU15tLGS4EMr8lZLLcVT0cVK3FXuzFPQS8F98Wa2qq30Z38EcHo5k8fprfXPu0JeqC0Ux8V2zOjh8VJ6Uorz2jrHQSIcofpsnk8oR6zE1tle7G1vyud1o4Y+ZMjffSJOEyPC14dmTXjxOmzDPiw8kl2Y1eilSPsq7/APrZ/YrLRRfTJWVeTXHo/jF/Mg/VnN+n/g9yAeQYu+tSC8n/AMEfwEu2Sssfw9pdGKrf3mJdvDZ/YvHSY12Q80V4Nz6N4WDvUqOXg2l+R19rFEr7sn0V2d51hMJBww8IyqNNcXbzJbhXCO+KM2/kfNpyu2+bb+Zxk7N0ejEgkAAAAAAAAAt+jOH6ysr8Fc4Z3SOWXhHeWPO7Zg7YBIAAAAAoFp0e9o/I36BfM5zM81xso1Xsu1jrqtVKGSkRCKZpjnFRb3crH1Ca7Le2mblnXOJ0XqH6irxfh7VzqKWkSy16bCxWU2P6RVH2aT7XhZsT1j8HSOGK7IUsHKq1KtNza4bl8kYMmplPs6NpdE2Etjdpb0OKk10c3b7RJp4+ot0jrHUZF2yHBF7lmKc6bb3q56unyuUG7OLjyUmKxc5Sertc83NqJ7qs6RRX4zH9WtZPwVyilkk6s6qFujns3zvS3HgrmiGKXlmrHirwcrOTbu95p8UaF+GJFE2AQAAAAAAAAAdB0M9tL+2zNqfqcM/1OzMHgx+AAAAABYAoFt0cheo3yS/U9D05f/U55CPnKSquxz1qrMxAgtmRcnSiBWx73Qi2y6gWUTFYSc9akrLkibSLXRLo4aMNy9eJRso3ZuKkGutRUlZ/m0WTFkGrhakFenK/gzopJo6JouuiOJqTU4T0bT2fOx6Ojkqr9OGXjlFZi8BU22pVGtXwMeoqGSqLwmmikz/AzjC8W3rqy2KaZpxTXRyk78b38TX4NfgxCIAAAAAAoEPsAkAAAHQdDPbS/tszan6nDP8AU7MweDH4AAAAAAPUhTbpA6TJcH1UXUlpdHtaPB7Sc2cZuyhx1TaqSa3N6HmajJ7k2dIdGhnAlHkYpbtCdzJ5PbEEAEgAACwRBtwlfq5KS9Ttize3JMSVlzjMNGtDrI96yPSzY1mhvRyT28HPVqV04tHlO4SOylXJwvSDC9XPdbkb8U9yN+OVoqTsdAAepXAJuBwPWSjGTaUnvOc8iRznOiXnGRToartR58imPNZWGSyrdCW+1/I7OSO1mtokHgAAOg6Ge2l/bZm1P1OGf6nZmDwY/AAAAAAoFpk9CHtJyXZ4G7S4197Obk+j3M872uzFpR4l8+qlLhBQaKiLPPpt2dEjIih/gIHIJscgD5AAAAAAFlk+M2HsvdL6G7R59r2vo5zjZtzrAKP3kdz3o6a3Txj80RCSXBxnSjCKcNv3TNp3TNmFqziWjebDKVNreKFHkHqQwdlHDqph4yikpR1VuaMLfyMbdSJ+ArKvSs1w2ZLxOc7i7KTuLsr8vw8KNWVFrSa7N9TrKTmrLuTmrKPPsA6Mt2l+yzviybkd8eSyoO518grRY6Dob7aXwM4an6mbP9Ts0YPBj8AAAAA11qqhFye5EpN9EpWypjKpW7Tk4we5K6ujSkoKkz1sGiTVyM/sUVvk/wDImzWtNjXZ68EuE5fNshMiWkxsKnWjunfzRG1HCXp6fRs+01Y74p+TRDgjhL09nqzRLvQl8myvtGeWimjOGaU3xa81Yj2mcXhmvBvhioP8S/Irsf4c3CS7RtjUj70f8kVcX+EbWj3bj70fmhTFMxlUivxR+aFMUzW8bCOu0vzLxiy/tyl4M8T0jlUjsKLl42aXzNPuOUakdcehcmVtenOomptKNtxSKro9LHoditnFY2GzJ2NkejlNU6Lmllynh1UWso97icHkadGdzplFXhsvQ0XaOvg63oridpOBj1Ea5RmzxrlGdCTw+JcPwVLteZV1KJV1KJnnlF9bSlHfe1/UjE6i0MTqLRG6ZStCEeJbTdk4ezkTc+zWCw5Og6G+2l/bZk1P1OGf6nZmDwY/AAAAHZBV57fZil3XJbXzO+F0aNOlvVm6lZq0d1i7o+jVNIjVcuUnfaf1J3FZY032a3l013arXndk7l5Ke2/DFq8eUvoOGPlEfb5x71N+hNIn3GjYsyg12k15psrsfgt7sa5R4q9CXL1VhUiN0H4Peqovl6WRPJV48cuzH7HR5/7iOSrxYnw0e/ZKXvf7if8Awh4MQ+zUfe+ov/hKxYfwKNCPL6Mcl9uNdIy/iFNaJ38EhRO9eCozXO2k4RVjpCBnzZ30c3UntO7NC4Md2dV0QrpxlTfO5jzqnZlzKnZUdIcE6VTd2XqjthmmjrinaJnRK+34HPO0UzNHVYnBxqNN747jIpUZd1KjzFYRVHFt22HcRkSpHJdKMV1lR8o6L8mbdPCka8MeCiNB2AJsv+hr++l8D/My6j6mfP0doYXwY/AAoAGnFRbi1F2dtC0KslUQsDiFUi6dTvLRpnR2uUW5XKCylLuzkl4Mn3X5RoWrnFmTy6X+pL5hZS/86dmH8PqLVVL+Y9xeS0dfJdo8lGvHVpS8lZllKJoj6gvJisdwlBx+v5E2aI6vHIVMbTSu+HNP9iaZ0efHRAxdSdtuNGKha7va9iYtPizI9XG+CMqM6sXVUVGK+ti25XRylqflwb8RRh1UWu9JpbxZrySXt7j1ZaqVSCbbU1qm+JCyX0Z9LkeR8lj/AA6nyZDmz0vbjVmawVNfhFj20Y1J0qavZfQK2yrcInIZxiFUm2lZcDTBHnZGnIi06EpapFm6ObdFpkEZQqrRo4Z2muDnmpo7OvhYVF24pmFTcejHucRh8JCn3VYSm2JSbN5XsouytznM40otX7T3HaGNtqjvDG2zg8RU2n6nopUbYqjUT5AJLcE/KJWm2pWdtPPkVnjeWPK6OU6fZ12CzhPs1Oy9NeDPPyY/wxzx/haxmnuZx2tHPa0ekCzwEEXE4CM9d0ua0OimXUjPCUHBWcr8iHJENokIpZB42O2PJWQzNzlJQpuSi7XOmzyX2okYXHwqNx3SW9MONLhhxfaZGzXZc6dPZTcpJvy/7YmDe1stCUqGewbhGmnbaml6E4pc2yMT5tnmbUtmjGnHS7jFiLudloO5NkangVGtThdtKN7PmrF3LtnR5pODRtx9PbrxjtNWT3ERdRIwzcOSvr4ipGb7b6tSs36nZU40ao6qVURMfm8oy2Yt2sXjjOizSKiriZS3s67UiHNnuEoOpJLmyZNRVnOTrk7XLcnjBJy1fLgjz8mZsxTytsn/AGSF72tZHPe2U3Nm9FCp45W1e4RTYSbZzmb9IlG8KfqzXjwWaYYjlsRiZTd5O7Nax7UaIxo0lkWAAAJ+Tq82v6T0vTknNp9GPWScVaLWUWuG0uTNGr9MjNboGTFqK4ZKwsl/KqOD9yV9fKx8/m02TH9katyZNhmFWnpUptrnGz/UyOCZDgvBIp5xSe+Wz5plPbZVwZLp4mEu7JMq4NeCu1/hsuRtIoBIBq+gHkpsOpYeq4yt1dSTcXyfJ/I6N7lwdXUkSsyw382C7cdfNcisK6ZWLXRCweIVavCfKlJa89r/ANOkltjRd3FUWOOouTg1+Gab8kc4tLs5xZjmyeymlezTfoTj7LQfPBDy6q61brF3YRsXmtsaLS4jRqxdZRrTlxUFYvjhugWgt0TZQwTnh5X0c7z9VqV3VJUVUqmcXiI2k0bos2JmssTydH0QopzcnvS0Mupk6OGd8HYGFdGMAIhYzNKVJayu+S3nSOKUjosbZymbZ9OtpHsx5cTZjxbezTHHXZSuVzR10dao8FkgAAAAsMl77+E9P0z7mLW/RF0fQeDyjGUEznPFCa+SLRm0e0qlSHdl6PU8rP6Tjn1waIajnk3LMIv2tFPxijyc3peaH1O8cqfTCqYWfvQ+hilps0e0dLfl2ZKjTXcr/NlHCS7Qv/hIUanCurFKXlDjye/f8K0GRUR8THEYerVhsylDwY4XSHF0iVl2JsuqqNbaXzRzlHyUkkvBlh8rhCo6kdLp6cCJZOKDycUT0U7Kdnko30F0Lo10MPGnfZVru7LOVk7rIFLLU6sqk1e9tnwsdHk4pF3k4pGGc5rGlBxja9mvK4xYm3bLYsTbtnDVZXdz0UqRsRgCTp+h0ltNcbGbUrgzZzrDAuDIjySurEpko5TpNhIUdlxWr33NundmrDycy2a2aWeAAAAAAAFhkvffws9P0z7mLW/RF0fQeDygRwASRSDRFIkxdNPeijxQfgspyXTMPs0PdRyelxPtF1mn+mLwsfFHOWgwvwWWokeRwi5s5v03D+Fv5Mg8M/fkUfpeIn+U/wANVXAuX8yV1uehWXpeOiy1V+CfluZV1Lq7KdlfXefP67RxxSqzRFqastcNmu09mUHGR58oJdFXBfpMWJjtbN+1yOdWrKtUbKk1FXbskKb4SG1nPZhnzknGlHT3tT0cHp85rcdIqEX8mctiqzk9dXxZ12beDYujSifBYILoWW3R6vsVY+OjOOdXE5Zlwd4eaYQAc10xjpB8v3NWm7ZpwPs5E3M1MAAAAAAAFhkvffws9P0z7mLW/RF0e/4PKAAAAAAAAAAAABPgIzyj2x8r61xI34vojprLkvkfPKTJZh1Mb3trzJcuKIsoM/wtrduT2mrrgel6dBTyJM67qRHhBJWS0PtYwjFUlwea5OTtldmGAv2o+qPM1miU7lHwbNPqnxGRU7t54ck4umemmpLg8uQyUjdhKjUk1waKTVorNWj6Rhqm1GMuaPMmqkYJKmbCpUqektHaot27rv6HbC6Z1xOmcLUjZnoro2mBJIAAAAABYZL338J6fpn2MWt+pdH0B5LBBIBBrhWTezxRzWRN0jo8bStmw6FAACSAQSCSAQF3RtyGO1VlLgj5D1fJc2ejBVBHSHieLIBBBQ9IJXnGPqe36PHdmsmf1siH2C4MDBDQTorcwwN+1H1PK1mitbom/T6nmmVDR4jVdnpX5R7CVncr4JZ9DyR3oQ+E8zL9jBlVSJxzOZrr0lOLi9zRaMqZMXTPn2Z0NiTjxTf/AAenjdo9DG7RBLlgAAAAACblNS0/NG/0+W2dGXVx3QL0+jbs8ZcAEgkEXFUX3470ZM2Jp7onfHkv4yNmGrqa8VvRfFm3KmVyYtr4NxoOQIAAABhVdk/Ipmlti2Wxq5Fp0cp2g3zep8Jrcm/I2ejJUqLgxro5geAujm81ntV/hTPpfRMfkrlfwNR9KYgSAVav/A+OUVuYYC95I8rWaRNOaN+n1DfxZVRhrY8NqnR6d2dx0Xk3S14Ox52f7GLP9i4OBxABy3S/CLSouO826eZqwyOVNZpAAAAAAJWAp3btvSbNmji5T47Rn1EqiXeGqbUfHifQ4Z7onk5YU7Np28HIEdkgs+UQuCLiMO77UNJfmY8mJr5Q7NEMifEujKjik9JaSJx6hdS7E8XlEg0/9M4Jq+USCt2DTXW04wW+TPP9Tz7MfBp00VutnU4WgoKy8D4mUrdndyvs3FCAQ5cEM5nG+2kfW+iL4lNS6ikYHvWYwSKBFk3wR8dLs24sx6/IoY2d9NH5ogY3KatNRnLVNb1wPlveUps9eE0+Dqei8GqOvvfoYc7+ZlzfYtzgcgAUnStfdL4kd9P9jtg7OIZ6JtPAAAAAAWGTd9/Cel6b9zFrPoibL7ud/wAMj02/akn4Zk/sjX4TUzYpqSMzg0CdyqiECNxNAncRTNVegpefBnHJjhLxydITcTQqsqbtLWPBnBZZY3Uujs4KauJKjNPVM1RmnyjPKDRkX3IqZ5ZDbrr+lXPmvWsvg3Y1ULOmufN0WaAoijyUrJvkh3wSkcbiK8usnNK8Wz6r01yx47JyqLo20a6luPZhnjMxZMTRtudbOaTBO5E0asPS62sordHVnz3rGo42o34Y0rL/ADmF6Morwt8z5vG3ZbHalZtyynsUox5IjJyxkdyJRSilAVyKKPpTWtCMf6kzTp18jvgRxUnq/M2mwxJAAAAAJuVd5/Cen6b92ZNX9SVj+6ehrPrH/TFpu2bcPuXkd8XRSZsL+Tm+gSECsguwiz+oXZqxXdZk1P1Rp03cjXge6TpeimXsko0+TOzZk/tZeX6ny3rX2N6/qReHiolgEGuv3X8LL4+y0ejncLx8z67Sf1FMnaI+H77J0vZObonHpsxAowbci9pPyX5ny/q39iPQh/WW9fus8iHZK6PaW5eSIn2UfZmVIPGPIZSdIeBq0/2NOE5yRsNJ4AAAAAD/2Q=="

    return (
      <div className='project-item'>
        <div className='project-image-container'>
          <Link to={`/api/projects/${this.props.projectId}`}>
            <img className='project-image' src={temp_img} />
          </Link>
        </div>
        <div className='project-index-text'>
          <Link to={`/api/projects/${this.props.projectId}`}>
            <li>
              {this.props.title} <br/>by {this.props.author}
            </li>
          </Link>
        </div>
      </div>
      );
  }
} 
export default ProjectIndexItem;