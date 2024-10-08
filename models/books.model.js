const books = [
    { 
        id: 1,
        name: 'სამოსელი პირველი',
        author: 'გურამ დოჩანაშვილი',
        description: 'სამოსელი პირველი არის თავგადასავლის მაძიებელი დომენიკოს ამბავი, რომელზეც ძლიერ იმოქმედა იდუმალებით მოცული კაცის - ლტოლვილის ნაამბობმა. დომენიკო ტოვებს მშობლიურ სახლ-კარს, მამას და მიდის "ლამაზ ქალაქში". თანდათან მრავალ ადამიანთან ურთიერთობისას, იგი მიხვდება, თუ რა არის მეგობრობა, სიყვარული, სიკეთე, ბოროტება, გულწრფელობა, პატიოსნება. ეს არის წიგნი სიკეთისა და ბოროტების შეცნობაზე, მას თამამად შეიძლება ვუწოდოთ "ცხოვრების წიგნი".',
        price: '49,99₾',
        status: '✔ მარაგშია',
        ISBN: 9789941103179,
        publisher: 'მერიდიანი',
        publishing_year: 2011,
        cover: 'მაგარი',
        number_of_pages: 664,
        format:'10x15',
        language: 'ქართული',
        backdrop_path: 'https://apiv1.biblusi.ge/storage/book/y070gd6LngdT9kTDPq0Jv6oFLZRjzgSWn4vzbHDG.jpg'
    },
    { 
        id: 2,
        name: 'უთავო მხედარი',
        author: 'მაინ რიდი',
        description: 'მორის მუსტანგერი, ლუიზა პოინდექსტერი და კასიუს კოლჰაუნი ლეგენდარული სასიყვარულო სამკუთხედია! ვინ არიან ისინი? მორისი ტეხასში სახელგანთქმული ცხენოსანი და მეჯინიბე, ველური ფაშატების საუკეთესო გამხედნავია, ლუიზა – მდიდარი პლანტატორის, ვუდლი პოინდექსტერის მშვენიერი ქალიშვილი, კასიუსი კი, ყოფილი კავალერისტი კაპიტანი, ღვარძლიანი და მშიშარა სამხედროა.',
        price: '14.95₾',
        status: '✔ მარაგშია',
        ISBN: 9789941353277,
        publisher: 'პალიტრა L',
        publishing_year: 2018,
        cover:'რბილი',
        number_of_pages: '432',
        format: '10x15',
        language: 'ქართული',
        backdrop_path: 'https://apiv1.biblusi.ge/storage/book/SPSSKvL5OxIPbjMMsuqSZwLvRoFZbqS8lQQywsSG.jpg'
    },
    { 
        id: 3,
        name: 'ქარიშხლიანი უღელტეხილი',
        author: 'ემილი ბრონტე',
        description: 'ეს უბრალოდ სასიყვარულო რომანი კი არ არის, არამედ ბევრად უფრო ღრმა ნაწარმოებია. მისი დედააზრი, რომ ადამიანური ბუნების გამოვლენის საფუძველი ის ძალებია, რომლებიც მას დიდებულებას სძენს, აყენებს ამ რომანს განსაკუთრებულ, თვალსაჩინო ადგილზე მსგავს რომანთა შორის." - ვირჯინია ვულფი. ინგლისური ტელეარხის UK TV Drama-ის გამოკითხვით, ,,ქარიშხლიანი უღელტეხილი" ყველა დროის ყველაზე რომანტიკულ რომანად აღიარეს, ხოლო BBC-ის 2003 წლის გამოკითხვაში - ,,ყველა დროის 200 საუკეთესო წიგნი" - ის მე-12 ადგილზეა.',
        price: '14,95₾',
        status: '✔ მარაგშია',
        ISBN: 9789941351693,
        publisher: 'პალიტრა L',
        publishing_year: 2022,
        cover:'მაგარი',
        number_of_pages: 551,
        format: '10x15',
        language: 'ქართული',
        backdrop_path: 'https://apiv1.biblusi.ge/storage/book/3v1P4Tq9v48Es1jtRbiS4XIT4KT2uxKBOvUJO90g.jpg'
    },
    { 
        id: 4,
        name: 'ოდისეა',
        author: 'ჰომეროსი',
        description: 'დასრულდა ილიონის ომი. "ტროას წმინდა ციხესიმაგრე დაეცა", ბერძნები უკან ბრუნდებიან. არანაკლებ ტრაგიკულია მათი უკუქცევა: ბევრი მათგანი ზღვაში დაიღუპა, ერთი კი, ყველაზე ძლევამოსილი, ერის მწყემსი აგამემნონი საკუთარ სახლში ბაგაზე მიბმული ხარივით დაკლეს. ბევრმა მშვიდობით ჩააღწია სამშობლოს და ახლობელთა შორის ნეტარებს.',
        price: '19,95₾',
        status: '✔ მარაგშია',
        ISBN: 9789941351259,
        publisher: 'პალიტრა L',
        publishing_year: 2019,
        cover:'მაგარი',
        number_of_pages: 345,
        format: '17.5 X 24.7',
        language: 'ქართული',
        backdrop_path: 'https://apiv1.biblusi.ge/storage/book/ehwfK5nX9KQgILYDw6HoPE57pcC9wN2TNz7wlFts.jpg'
    },
    { 
        id: 5,
        name: 'ენი მწვანე მეზონინიდან',
        author: 'ლუსი მოდ მონტგომერი',
        description: 'ჩემში იმდენნაირი ენი ცხოვრობს, რომ ზოგჯერ ვფიქრობ, ამიტომაც ვარ ასეთი აბეზარი. ერთი რომ ვყოფილიყავი, ბევრად მოსახერხებელი იქნებოდა, მაგრამ... ნაკლებად საინტერესო!“ ენი შირლი, იგივე „ლედი კორდელია ფიცჯერალდი,“ თერთმეტი წლის წითური, მეოცნებე ობოლია, რომელსაც ევონლელი ფერმერი და-ძმა იშვილებს. ენის გამოჩენა კათბერტების მწვანე მეზონინებიან სახლში დიდი მითქმა-მოთქმის მიზეზი ხდება და მის ცხოვრებაში ფათერაკებითა და იმედგაცრუებებით, სიხარულითა და წარმატებით სავსე „ახალი ეპოქა“ იწყება. წიგნი არის არაადაპტირებული ვერსია.',
        price: '14.36₾',
        status: '✔ მარაგშია',
        ISBN: 9789941452307,
        publisher: 'წიგნები ბათუმში',
        publishing_year: 2022,
        cover:'რბილი',
        number_of_pages: 532,
        format: '14x21',
        language: 'ქართული',
        backdrop_path: 'https://apiv1.biblusi.ge/storage/book/u5jF2EgxsUppz3Bn4lRJptDwkjsljDm1iOmrGJ90.jpg'
    },
    { 
        id: 6,
        name: 'ქარავანი',
        author: 'ჯემალ ქარჩხაძე',
        description: 'ქარავანი მრავალპლანიანი რომანია. აქ აქცენტი ერთ პიროვნებაზეა, რომელსაც ღრმა ბავშვობიდან განვითარების გარკვეულ ეტაპამდე – შუა ასაკამდე – ვაკვირდებით და ვსწავლობთ. დეტალური, აუჩქარებელი თხრობა და სიტუაციების სიუხვე რომანს უზომოდ სასიამოვნო წასაკითხს ხდის. მრავალმხრივი ფსიქოლოგიური დაკვირვებები ღრმად წარმოაჩენს პიროვნულ პრობლემებს და უზარმაზარ მასალას იძლევა ანალიზისთვის.',
        price: '27₾',
        status: '✔ მარაგშია',
        ISBN: 9789941452307,
        publisher: 'ქარჩხაძის გამომცემლობა',
        publishing_year: 2016,
        cover:'მაგარი',
        number_of_pages: 532,
        format: '15x22.3',
        language: 'ქართული',
        backdrop_path: 'https://apiv1.biblusi.ge/storage/book/SbHpqI8EsByC0Ao1y4BbvtF2zCH8lChyGVVUiQZO.png'
    },
    { 
        id: 7,
        name: 'მოთამაშე',
        author: 'ფიოდორ დოსტოევსკი',
        description: 'მოთამაშე აზარტულ თამაშებზე დამოკიდებულთა ფსიქოლოგიური პორტრეტია,თანაც სრულყოფილი პორტრეტი.რომანს ავტობიოგრაფიულ ნაწარმოებადაც მიიჩნევენ,რადგან დოსტოევსკის თამაშისადმი თუ თუმაშზე დამოკიდებულება საყოველთაოდ იყო ცნობილი - მწერალმა ქონების მნიშვნელოვანი ნაწილი ბანქოში წააგო.',
        price: '12.95₾',
        status: '✔ მარაგშია',
        ISBN: 9789941326554,
        publisher: 'პალიტრა L',
        publishing_year: 2018,
        cover:'რბილი',
        number_of_pages: 182,
        format: '14x21',
        language: 'ქართული',
        backdrop_path: 'https://apiv1.biblusi.ge/storage/book/5R5FmceGoSDhQTADiaO5QhRCiJQOFUJXc2g7q4qc.jpg'
    },
    { 
        id: 8,
        name: 'თამაში ჭვავის ყანაში',
        author: 'ჯერომ სელინჯერი',
        description: 'ჰოლდენი ამბობს : „წიგნი ისეთი უნდა იყოს რო წაიკითხავ უნდა მოგინდეს რო მისი დამწერი შენი გადაბმული ძმაკაცი იყოს, აი ისეთი რო დაურეკავ და ნებისმიერ რამეზე ებაზრები, თუნდაც შუაღამისას …” ამ წიგნის წაკითხვის შემდეგ კი ნამდვილად გვიჩნდება სურვილი ჯერომ სელინჯერის ახლოს გაცნობისა.',
        price: '13.95₾',
        status: '✔ მარაგშია',
        ISBN: 9789941321689,
        publisher: 'პალიტრა L',
        publishing_year: 2019,
        cover:'მაგარი',
        number_of_pages: 300,
        format: '13X18.3',
        language: 'ქართული',
        backdrop_path: 'https://elibrary.sou.edu.ge/files/books/book-402/cover-402.jpg'
    },
    { 
        id: 9,
        name: 'მზე მთვარე და პურის ყანა',
        author: 'თემურ ბაბლუანი',
        description: 'ძალიან რთულია, დაამტკიცო შენი უდანაშაულობა, როცა კრიმინალები მოკვლით გემუქრებიან, პროკურატურისთვის მთავარია, საქმე გახსნილად გამოაცხადოს, „გამოვლენილი დამნაშავე“ გააციმბიროს ან თუნდაც დახვრიტოს. კიდევ უფრო რთულია, ნახევარი ცხოვრება სხვის მიერ ჩადენილი დანაშაულის გამო გაატარო ციხეში, სადაც შეიძლება ჭლექმა მოგიღოს ბოლო, თუ ვინმეს თვალში არ მოუხვედი, სიცოცხლეს გამოგასალმოს ან სულაც უბრალოდ ჭკუიდან შეიშალო. დიახ, რთულია. თუმცა ამ ყველაფრის გაძლება და მასთან ბრძოლაც კი შეიძლება, როცა იცი, რომ შენს დაბრუნებას ვიღაც, თუნდაც მხოლოდ ერთი ადამიანი ელოდება.',
        price: '16.9₾',
        status: '✔ მარაგშია',
        ISBN: 9789941239472,
        publisher: 'ბაკურ სულაკაურის გამომცემლობა',
        publishing_year: 2018,
        cover:'რბილი',
        number_of_pages: 496,
        format: '14.50 X 21.50',
        language: 'ქართული',
        backdrop_path: 'https://apiv1.biblusi.ge/storage/book/PVUrpO0LbLAyabVPzagZUAXoS218GMjOvwxJxbse.jpg'
    },
    { 
        id: 10,
        name: 'პარიზის ღვთისმშობლის ტაძარი',
        author: 'ვიქტორ ჰიუგო',
        description: 'რომანში ამ ტაძრის ირგვლივ ვითარდება XV საუკუნის პარიზის ცხოვრება, რომელიც ზოგადსაკაცობრიო პრობლემების: სიყვარულის, ცოდვისა და სიკვდილის გარშემო ტრიალებს. რომანში სამი მთავარი გმირია: ულამაზესი ბოშა ქალი ესმერალდა, განათლებული, ლამაზი, მაგრამ გულცივი კლოდ ფროლო და მახინჯი, მაგრამ ლამაზი სულის ადამიანი, ტაძრის ზართამრეკავი კვაზიმოდო. ამ სამი ადამიანისა და გარშემომყოფებთან ურთიერთობაში იკვეთება რომანის იდეა, რომელიც მკითხველში ცეცხლს ანთებს.',
        price: '24.95 ₾',
        status: '✔ მარაგშია',
        ISBN: 9789941351860,
        publisher: 'პალიტრა',
        publishing_year: 2017,
        cover:'მაგარი',
        number_of_pages: 536,
        format: '17.5X25',
        language: 'ქართული',
        backdrop_path: 'https://apiv1.biblusi.ge/storage/book/CkP1jY8z5nxtGzphOE3eU4k0d9tMuBWoqDabHqsb.jpg'
    }
]

module.exports = books