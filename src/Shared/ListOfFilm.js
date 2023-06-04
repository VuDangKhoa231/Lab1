
export const genres = [
    'Phim Tình Cảm',
    'Phim Hài Hước',
    'Phim Tâm lý',
    'Phim Siêu Anh Hùng',
    'Phim Khoa Học Viễn Tưởng',
    'Phim Học Đường',
    'Phim Live Action',
    'Phim Hành Động',
    'Phim Lãng Mạn'
];

export const nations  = [
    {
        id: 1, name: 'Việt Nam', img: ''
    },
    {
        id: 2, name: 'Mỹ', img: ''
    },
    {
        id: 3, name: 'Philippines', img: ''
    },
    {
        id: 4, name: 'Thải Lan', img: ''
    },
    {
        id: 5, name: 'Nhật Bản', img: ''
    },

]

export const actors = [
    { name: 'Uhm Jung Hwa', image: 'assets/images/Actor/UhmJungHwa.jpg' },
    { name: 'Kim Byung Chul', image: 'assets/images/Actor/KimByungChul.jpg' },
    { name: 'Myung Se Bin', image: 'assets/images/Avtor/MyungSeBin.jpg' },
];

export const ListOfFilm =[
    {id: 1, title:'Bác sĩ Cha', year: '2023', director: 'Kim Dae Jin', actor: [actors[0],actors[1], actors[2]], genre: [genres[1], genres[2]],nation: 'Korean',type: 1, img: 'assets/images/DoctorCha.jpg', clip: 'https://www.youtube.com/embeb/AY-V1rKkCzQ',description: 'Bác sĩ Cha - Dr. Cha, Doctor Cha Jung Sook (VietSub - Thuyết Minh) kể lại câu chuyện Cha Jung Sook kết hôn với Seo In Ho, người làm bác sĩ phẫu thuật trưởng tại một bệnh viện đại học. Anh ấy có một tính cách nghiêm khắc, nhạy cảm và thấu đáo. Cha Jung Sook là một bà nội trợ toàn thời gian trong 20 năm qua, từ bỏ sự nghiệp bác sĩ trong những năm nội trú y khoa. Sau ngần ấy năm, cô quyết định bắt đầu lại khóa học bác sĩ nội trú của mình.'},
    {id: 2, title:'Love & Death', year: '2023', director: 'Lesli Linka Glatter, Clark Johnson', actor: ' Elizabeth Olsen, Jesse Plemons, Lily Rabe, Patrick Fugit ,Krysten Ritter, Tom Pelphrey ,Elizabeth Marvel ,Keir Gilchrist', genre: [genres[2]],nation: 'American', type: 1, img: 'assets/images/Love&Death.jpg', clip: 'https://www.youtube.com/embeb/1ycS0VnrsZQ',description: 'Love & Death là một bộ phim truyền hình ngắn tập về tội phạm của Mỹ do Lesli Linka Glatter và Clark Johnson đạo diễn, David E. Kelley viết kịch bản, công chiếu vào ngày 27 tháng 4 năm 2023, trên HBO Max'},
    {id: 3, title:'Black Adam', year: '2022',director: 'Jaume Collet-Serra', actor: 'Dwayne Johnson ,Aldis Hodge ,Noah Centineo, Sarah Shahi ,Marwan Kenzari ,Quintessa Swindell, Bodhi Sabongui ,Pierce Brosnan', genre: [genres[3], genres[4], genres[7]], nation: 'American', type: 0,  img: 'assets/images/BlackAdam.jpg', clip: 'https://www.youtube.com/ambeb/X0tOpBuYasI',description: 'Black Adam là một bộ phim điện ảnh siêu anh hùng của Hoa Kỳ ra mắt năm 2022, dựa trên nhân vật cùng tên của DC Comics. Được sản xuất bởi New Line Cinema, DC Films, Seven Bucks Productions và Flynn Picture, đây là phần phim ngoại truyện của Shazam!, và là phim thứ 11 trong Vũ trụ Mở rộng DC'}, 
    {id: 4, title:'My Blue Summer', year: '2022',director: 'Huang Bin', actor: 'Xin Yunlai ,Sophie Zhang, Wu Jiacheng, Jackie Li', genre: [genres[0], genres[5]], nation: 'China',  type: 0, img: 'assets/images/MyBlueSummer.jpg', clip:'https://www.youtube.com/embeb/7UXjss7npcQ', description: 'My Blue Summer là một bộ phim lãng mạn dành cho giới trẻ của Trung Quốc năm 2022 do Bin Huang đạo diễn, với sự tham gia của Xin Yunlai trong vai Sheng Huai Nan và Sophie Zhang trong vai Luo Zhi.'},
    {id: 5, title:'Kịch Trường của Takemichi', year: '2021', director: 'Tsutomu Hanabusa', actor: 'Yuki Yamada, Mio Imada, Gordon Maeda, Yoshiki Minato, Ryo Yoshizawa, Takumi Kitamura, Shotaro Mamiya', genre: [genres[6], genres[7]],nation: 'Japan', type: 0,  img: 'assets/images/KichTruongCuaTakemichi.jpg', clip: 'https://www.youtube.com/embeb/0y4yAFpsUew',description: 'Kịch Trường của Takemichi kể về một kẻ thất bại ở hiện tại du hành ngược thời gian đến những năm trung học của mình và cứu lấy tình yêu đời mình khỏi sự diệt vong trong tương lai. Tại đây anh buộc phải trở thành thủ lĩnh của một băng nhóm học đường đáng sợ.'},
    {id: 6, title:'Bộ đôi sấm sét', year: '2021',director: 'Ben Falcone', actor: 'Melissa McCarthy, Octavia Spencer, Bobby Cannavale, Pom Klementieff, Taylor Mosby, cùng Melissa Leo và Jason Bateman.', genre: [genres[1], genres[7]], nation: 'American', type: 0,  img: 'assets/images/BoDoiSamSet.jpg', clip: 'https://www.youtube.com/embeb/8o7PzozysYA',description: 'Bộ Đôi Sấm Sét kể về đôi bạn thân thời thơ ấu tái hợp trong vai trò bộ đôi siêu anh hùng chống tội phạm bất đắc dĩ khi một người phát minh ra công thức giúp người thường sở hữu siêu năng lực.'},
    {id: 7, title:'Shazam 2: Cơn thịnh nộ của các vị thần', year: '2023', director: 'David F. Sandberg', actor: '', genre: [genres[3], genres[4], genres[7]],nation: 'American',  type: 0, img: 'assets/images/Shazam2.jpg', clip: 'https://www.youtube.com/embeb/AIc671o9yCI', description: 'Shazam! Cơn thịnh nộ của các vị thần là bộ phim siêu anh hùng của Mỹ kể về nhân vật Shazam của DC Comics. Được sản xuất bởi New Line Cinema, DC Films, The Safran Company và Mad Ghost Productions, và được phân phối bởi Warner Bros. Pictures, phim là hậu truyện của Shazam! và là phim thứ 14 của Vũ trụ Mở rộng DC.'},
    {id: 8, title:'High & Low the worst X ', year: '2023', director: 'Shigeaki Kubo', actor: 'Kazuma Kawamura , Hokuto Yoshino, Jun Shison, Yuki Yamada, Gōki Maeda, Takayuki Suzuki', genre: [genres[5], genres[7]],nation: 'Japan', type: 0,  img: 'assets/images/HighAndLow.jpg', clip: 'https://www.youtube.com/embeb/C18igNb_E3o',description: 'High & Low The Worst là một bộ phim hành động Nhật Bản năm 2019 của đạo diễn Shigeaki Kubo. Với sự hợp tác với bộ truyện tranh Tồi tệ nhất của Hiroshi Takahashi, nó đã kể những câu chuyện về cuộc chiến giữa Oya Koukou từ thế giới High & Low và Học viện Housen từ thế giới Tồi tệ nhất và Quạ.'},
    {id: 9, title:'OMG! OH My Girl', year: '2023',director: 'Thitipong Kerdtongtawee', actor: 'Plearnpichaya Komalarajun, Peach Pachara Chirathivat, Wongravee Nateetorn', genre: [genres[0],genres[1]], nation: 'Thailand',  type: 0, img: 'assets/images/OMG.jpg',  description: 'Guy là một chàng trai vụng về trong tình trường hay nói cách khác là “ế nhờ thực lực”. Cậu đem lòng yêu đơn phương June, một hot girl bậc nhất của trường, nổi tiếng với lời đồn là “tráp gơ” - thuật ngữ giới trẻ dùng để chỉ những cô gái thích chơi đùa tình cảm người khác. Tuy nhiên, Guy lại mặc kệ lời cảnh tỉnh mà rơi vào lưới tình của June, nhưng số phận trớ trêu đã cản bước họ đi đến một mối quan hệ yêu đương ra trò.'}
];

