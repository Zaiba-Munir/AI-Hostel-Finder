const HOSTELS = [
  { id: 1, name: "Al-Madina Boys Hostel", city: "Islamabad", area: "H-11", nearby_university: "NUST", gender: "Boys", rent_pkr: 15000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 4.2 },
  { id: 2, name: "Green Valley Hostel", city: "Islamabad", area: "I-9", nearby_university: "FAST-NUCES", gender: "Boys", rent_pkr: 12000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 3.8 },
  { id: 3, name: "Roses Girls Hostel", city: "Islamabad", area: "F-8", nearby_university: "QAU", gender: "Girls", rent_pkr: 20000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Gym", "Security Guard"], rating: 4.6 },
  { id: 4, name: "Capital Comfort Hostel", city: "Rawalpindi", area: "Saddar", nearby_university: "PMAS-AAUR", gender: "Boys", rent_pkr: 10000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen"], rating: 3.5 },
  { id: 5, name: "Al-Noor Boys Hostel", city: "Rawalpindi", area: "Chandni Chowk", nearby_university: "NUML", gender: "Boys", rent_pkr: 9000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.2 },
  { id: 6, name: "Elite Residency", city: "Lahore", area: "Johar Town", nearby_university: "UMT", gender: "Boys", rent_pkr: 18000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Gym"], rating: 4.5 },
  { id: 7, name: "Sitara Girls Hostel", city: "Lahore", area: "Model Town", nearby_university: "FAST-NUCES Lahore", gender: "Girls", rent_pkr: 22000, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "Security Guard"], rating: 4.7 },
  { id: 8, name: "Punjab Students Hostel", city: "Lahore", area: "Canal Road", nearby_university: "University of the Punjab", gender: "Boys", rent_pkr: 8000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.0 },
  { id: 9, name: "Comfort Zone Hostel", city: "Lahore", area: "DHA Phase 5", nearby_university: "LUMS", gender: "Boys", rent_pkr: 25000, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Parking"], rating: 4.8 },
  { id: 10, name: "Karachi Students Lodge", city: "Karachi", area: "Gulshan-e-Iqbal", nearby_university: "NED University", gender: "Boys", rent_pkr: 14000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 4.0 },
  { id: 11, name: "Sea View Girls Hostel", city: "Karachi", area: "Clifton", nearby_university: "IBA Karachi", gender: "Girls", rent_pkr: 28000, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Security Guard"], rating: 4.9 },
  { id: 12, name: "Al-Falah Hostel", city: "Karachi", area: "Gulistan-e-Johar", nearby_university: "FAST-NUCES Karachi", gender: "Boys", rent_pkr: 11000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen"], rating: 3.6 },
  { id: 13, name: "University Town Hostel", city: "Peshawar", area: "University Town", nearby_university: "University of Peshawar", gender: "Boys", rent_pkr: 9500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler"], rating: 3.4 },
  { id: 14, name: "GIKI Nearby Hostel", city: "Topi (Swabi)", area: "Near GIKI", nearby_university: "GIKI", gender: "Boys", rent_pkr: 13000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 4.3 },
  { id: 15, name: "Sargodha Students Home", city: "Sargodha", area: "University Road", nearby_university: "University of Sargodha", gender: "Girls", rent_pkr: 10000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler", "Security Guard"], rating: 3.9 },
  { id: 16, name: "Faisalabad Boys Hostel", city: "Faisalabad", area: "Jail Road", nearby_university: "UAF", gender: "Boys", rent_pkr: 8500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.3 },
  { id: 17, name: "Multan Comfort Hostel", city: "Multan", area: "Bosan Road", nearby_university: "BZU", gender: "Boys", rent_pkr: 9000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.5 },
  { id: 18, name: "Bahria Town Girls Hostel", city: "Islamabad", area: "Bahria Town", nearby_university: "Bahria University", gender: "Girls", rent_pkr: 24000, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Gym", "Security Guard"], rating: 4.6 },
  { id: 19, name: "Air University Nearby Hostel", city: "Islamabad", area: "E-9", nearby_university: "Air University", gender: "Boys", rent_pkr: 16000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 4.1 },
  { id: 20, name: "COMSATS Boys Hostel", city: "Islamabad", area: "Park Road", nearby_university: "COMSATS University", gender: "Boys", rent_pkr: 13500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 4.0 },
  { id: 21, name: "Wisdom Boys Hostel", city: "Islamabad", area: "G-9", nearby_university: "COMSATS University", gender: "Boys", rent_pkr: 11000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.7 },
  { id: 22, name: "Margalla View Hostel", city: "Islamabad", area: "F-10", nearby_university: "QAU", gender: "Boys", rent_pkr: 17000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV"], rating: 4.3 },
  { id: 23, name: "Serene Girls Residency", city: "Islamabad", area: "F-7", nearby_university: "NUST", gender: "Girls", rent_pkr: 26000, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Parking", "Security Guard"], rating: 4.8 },
  { id: 24, name: "Pine View Hostel", city: "Islamabad", area: "H-8", nearby_university: "Air University", gender: "Boys", rent_pkr: 12500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Study Room"], rating: 3.6 },
  { id: 25, name: "Iqra Girls Hostel", city: "Rawalpindi", area: "Committee Chowk", nearby_university: "Fauji Foundation University", gender: "Girls", rent_pkr: 13000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Security Guard"], rating: 3.9 },
  { id: 26, name: "Cadet Boys Hostel", city: "Rawalpindi", area: "Adiala Road", nearby_university: "Arid Agriculture University", gender: "Boys", rent_pkr: 8500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.1 },
  { id: 27, name: "Askari Students Hostel", city: "Rawalpindi", area: "Cantt", nearby_university: "NUML", gender: "Boys", rent_pkr: 14500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 4.0 },
  { id: 28, name: "Liberty Boys Hostel", city: "Lahore", area: "Liberty Market", nearby_university: "Punjab University", gender: "Boys", rent_pkr: 10000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.4 },
  { id: 29, name: "GC Students Hostel", city: "Lahore", area: "Wahdat Road", nearby_university: "GC University Lahore", gender: "Boys", rent_pkr: 9500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen"], rating: 3.2 },
  { id: 30, name: "Emporium Girls Hostel", city: "Lahore", area: "Gulberg", nearby_university: "LUMS", gender: "Girls", rent_pkr: 27000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Security Guard"], rating: 4.9 },
  { id: 31, name: "Nishtar Boys Hostel", city: "Lahore", area: "Township", nearby_university: "UET Lahore", gender: "Boys", rent_pkr: 11500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 3.8 },
  { id: 32, name: "Riwaz Girls Hostel", city: "Lahore", area: "Garden Town", nearby_university: "Kinnaird College", gender: "Girls", rent_pkr: 19000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Gym", "Security Guard"], rating: 4.4 },
  { id: 33, name: "Al-Rehman Boys Hostel", city: "Lahore", area: "Ferozepur Road", nearby_university: "UMT", gender: "Boys", rent_pkr: 13000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 3.7 },
  { id: 34, name: "Zamzama Girls Hostel", city: "Karachi", area: "Zamzama", nearby_university: "IBA Karachi", gender: "Girls", rent_pkr: 25000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Gym", "Parking", "Security Guard"], rating: 4.7 },
  { id: 35, name: "Malir Boys Hostel", city: "Karachi", area: "Malir", nearby_university: "DHA Suffa University", gender: "Boys", rent_pkr: 10500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.3 },
  { id: 36, name: "Dow View Hostel", city: "Karachi", area: "New Town", nearby_university: "Dow University", gender: "Boys", rent_pkr: 12000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Study Room"], rating: 3.9 },
  { id: 37, name: "Ocean Breeze Girls Hostel", city: "Karachi", area: "DHA", nearby_university: "SZABIST", gender: "Girls", rent_pkr: 23000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Security Guard"], rating: 4.5 },
  { id: 38, name: "Federal Boys Hostel", city: "Karachi", area: "Gulshan", nearby_university: "Federal Urdu University", gender: "Boys", rent_pkr: 9000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.0 },
  { id: 39, name: "Quetta Students Home", city: "Quetta", area: "Sariab Road", nearby_university: "University of Balochistan", gender: "Boys", rent_pkr: 7500, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan", "Common Kitchen"], rating: 3.1 },
  { id: 40, name: "Balochistan Girls Hostel", city: "Quetta", area: "Jinnah Town", nearby_university: "BUITEMS", gender: "Girls", rent_pkr: 11000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Security Guard"], rating: 3.8 },
  { id: 41, name: "Hyderabad Boys Hostel", city: "Hyderabad", area: "Qasimabad", nearby_university: "University of Sindh", gender: "Boys", rent_pkr: 8000, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan", "Common Kitchen"], rating: 3.2 },
  { id: 42, name: "Indus Girls Hostel", city: "Hyderabad", area: "Latifabad", nearby_university: "Mehran University", gender: "Girls", rent_pkr: 10500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen", "Security Guard"], rating: 3.7 },
  { id: 43, name: "Gujranwala Students Hostel", city: "Gujranwala", area: "GT Road", nearby_university: "University of Gujrat", gender: "Boys", rent_pkr: 8500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler"], rating: 3.3 },
  { id: 44, name: "Sialkot Boys Hostel", city: "Sialkot", area: "Cantt", nearby_university: "University of Sialkot", gender: "Boys", rent_pkr: 9000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.6 },
  { id: 45, name: "Abbottabad Hill View Hostel", city: "Abbottabad", area: "Mandian", nearby_university: "COMSATS Abbottabad", gender: "Boys", rent_pkr: 10000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 4.0 },
  { id: 46, name: "Ayub Girls Hostel", city: "Abbottabad", area: "Jinnahabad", nearby_university: "Women University Abbottabad", gender: "Girls", rent_pkr: 9500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler", "Security Guard"], rating: 3.8 },
  { id: 47, name: "Bahawalpur Students Hostel", city: "Bahawalpur", area: "Model Town", nearby_university: "Islamia University Bahawalpur", gender: "Boys", rent_pkr: 7500, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.0 },
  { id: 48, name: "Cholistan Girls Hostel", city: "Bahawalpur", area: "Satellite Town", nearby_university: "Islamia University Bahawalpur", gender: "Girls", rent_pkr: 9000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen", "Security Guard"], rating: 3.5 },
  { id: 49, name: "Swat Valley Hostel", city: "Mingora", area: "Near University of Swat", nearby_university: "University of Swat", gender: "Boys", rent_pkr: 7000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan", "Common Kitchen"], rating: 3.2 },
  { id: 50, name: "Fatima Girls Hostel", city: "Faisalabad", area: "Susan Road", nearby_university: "GC University Faisalabad", gender: "Girls", rent_pkr: 9500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Security Guard"], rating: 3.7 },
  { id: 51, name: "Diamond Boys Hostel", city: "Islamabad", area: "Cantt", nearby_university: "QAU", gender: "Boys", rent_pkr: 8500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.8 },
  { id: 52, name: "New Horizon Lodge", city: "Islamabad", area: "Satellite Town", nearby_university: "QAU", gender: "Boys", rent_pkr: 7000, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.6 },
  { id: 53, name: "Unity Residency", city: "Islamabad", area: "Defence", nearby_university: "QAU", gender: "Boys", rent_pkr: 7000, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 3.1 },
  { id: 54, name: "National Lodge", city: "Islamabad", area: "Old Campus Road", nearby_university: "QAU", gender: "Boys", rent_pkr: 11000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 4.1 },
  { id: 55, name: "Vision Lodge", city: "Rawalpindi", area: "New Town", nearby_university: "Rawalpindi Medical University", gender: "Boys", rent_pkr: 7000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 4.8 },
  { id: 56, name: "Crown Residency", city: "Rawalpindi", area: "Bahria Enclave", nearby_university: "Arid Agriculture University", gender: "Boys", rent_pkr: 8500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.1 },
  { id: 57, name: "Sunrise Lodge", city: "Rawalpindi", area: "University Road", nearby_university: "Fauji Foundation University", gender: "Boys", rent_pkr: 25500, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Gym"], rating: 4.4 },
  { id: 58, name: "Prime Boys Hostel", city: "Rawalpindi", area: "Johar Town", nearby_university: "Rawalpindi Medical University", gender: "Boys", rent_pkr: 9000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler"], rating: 4.8 },
  { id: 59, name: "Elite Students Hostel", city: "Rawalpindi", area: "Green Town", nearby_university: "NUML", gender: "Boys", rent_pkr: 7000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.7 },
  { id: 60, name: "Capital Girls Hostel", city: "Lahore", area: "Wapda Town", nearby_university: "FAST-NUCES Lahore", gender: "Girls", rent_pkr: 9500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler", "Security Guard"], rating: 4.2 },
  { id: 61, name: "Al-Rehman Girls Hostel", city: "Lahore", area: "Garden Town", nearby_university: "Punjab University", gender: "Girls", rent_pkr: 13000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Study Room", "Security Guard"], rating: 4.0 },
  { id: 62, name: "Al-Rehman Students Hostel", city: "Lahore", area: "Bahria Enclave", nearby_university: "FAST-NUCES Lahore", gender: "Boys", rent_pkr: 11000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler"], rating: 3.9 },
  { id: 63, name: "Al-Falah Girls Hostel", city: "Lahore", area: "Old Campus Road", nearby_university: "LUMS", gender: "Girls", rent_pkr: 6000, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan", "Security Guard"], rating: 4.3 },
  { id: 64, name: "Diamond Boys Hostel", city: "Lahore", area: "Faisal Town", nearby_university: "Punjab University", gender: "Boys", rent_pkr: 9500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen"], rating: 4.5 },
  { id: 65, name: "Comfort Girls Hostel", city: "Karachi", area: "Wapda Town", nearby_university: "DHA Suffa University", gender: "Girls", rent_pkr: 8000, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan", "Common Kitchen", "Security Guard"], rating: 4.5 },
  { id: 66, name: "Silver Boys Hostel", city: "Karachi", area: "Green Town", nearby_university: "DHA Suffa University", gender: "Boys", rent_pkr: 21500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV"], rating: 3.7 },
  { id: 67, name: "National Boys Hostel", city: "Karachi", area: "College Road", nearby_university: "DHA Suffa University", gender: "Boys", rent_pkr: 8500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen"], rating: 3.8 },
  { id: 68, name: "Elite Girls Hostel", city: "Karachi", area: "Gulshan", nearby_university: "NED University", gender: "Girls", rent_pkr: 20500, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "Security Guard"], rating: 3.2 },
  { id: 69, name: "Metro Girls Hostel", city: "Peshawar", area: "Garden Town", nearby_university: "University of Peshawar", gender: "Girls", rent_pkr: 16000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Study Room", "Security Guard"], rating: 3.1 },
  { id: 70, name: "National Lodge", city: "Peshawar", area: "Wapda Town", nearby_university: "CECOS University", gender: "Boys", rent_pkr: 15000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 3.3 },
  { id: 71, name: "New Horizon Boys Hostel", city: "Peshawar", area: "Old Campus Road", nearby_university: "Islamia College", gender: "Boys", rent_pkr: 6500, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan"], rating: 3.5 },
  { id: 72, name: "New Horizon Boys Hostel", city: "Faisalabad", area: "Cantt", nearby_university: "NFC IET", gender: "Boys", rent_pkr: 13000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 4.0 },
  { id: 73, name: "New Horizon Students Hostel", city: "Faisalabad", area: "Iqbal Town", nearby_university: "UAF", gender: "Boys", rent_pkr: 15000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 4.3 },
  { id: 74, name: "Capital Girls Hostel", city: "Faisalabad", area: "University Road", nearby_university: "UAF", gender: "Girls", rent_pkr: 21000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Security Guard"], rating: 4.3 },
  { id: 75, name: "Metro Students Hostel", city: "Multan", area: "University Road", nearby_university: "NFC Institute", gender: "Boys", rent_pkr: 13000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 4.0 },
  { id: 76, name: "Al-Falah Students Hostel", city: "Multan", area: "Township", nearby_university: "NFC Institute", gender: "Boys", rent_pkr: 22500, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Gym", "Parking"], rating: 4.7 },
  { id: 77, name: "Capital Residency", city: "Multan", area: "Cantt", nearby_university: "Multan Medical & Dental College", gender: "Boys", rent_pkr: 15500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Study Room"], rating: 3.2 },
  { id: 78, name: "Star Boys Hostel", city: "Multan", area: "Iqbal Town", nearby_university: "BZU", gender: "Boys", rent_pkr: 23500, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Gym"], rating: 3.5 },
  { id: 79, name: "Star Girls Hostel", city: "Multan", area: "Satellite Town", nearby_university: "BZU", gender: "Girls", rent_pkr: 21500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Security Guard"], rating: 3.5 },
  { id: 80, name: "Al-Noor Boys Hostel", city: "Sargodha", area: "Wapda Town", nearby_university: "University of Sargodha", gender: "Boys", rent_pkr: 8500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen"], rating: 3.6 },
  { id: 81, name: "Crown Girls Hostel", city: "Sargodha", area: "Garden Town", nearby_university: "University of Sargodha", gender: "Girls", rent_pkr: 6000, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan", "Security Guard"], rating: 4.4 },
  { id: 82, name: "Elite Boys Hostel", city: "Sargodha", area: "Cantt", nearby_university: "University of Sargodha", gender: "Boys", rent_pkr: 7000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 3.5 },
  { id: 83, name: "Crown Residency", city: "Quetta", area: "Green Town", nearby_university: "BUITEMS", gender: "Boys", rent_pkr: 23000, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV"], rating: 3.5 },
  { id: 84, name: "Star Boys Hostel", city: "Quetta", area: "Gulshan", nearby_university: "University of Balochistan", gender: "Boys", rent_pkr: 8000, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan", "Common Kitchen"], rating: 4.6 },
  { id: 85, name: "Crown Lodge", city: "Quetta", area: "Gulshan", nearby_university: "University of Balochistan", gender: "Boys", rent_pkr: 15500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 4.4 },
  { id: 86, name: "Al-Rehman Girls Hostel", city: "Hyderabad", area: "Model Town", nearby_university: "University of Sindh", gender: "Girls", rent_pkr: 20000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Security Guard"], rating: 4.2 },
  { id: 87, name: "Prime Girls Hostel", city: "Hyderabad", area: "Faisal Town", nearby_university: "Isra University", gender: "Girls", rent_pkr: 25500, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Security Guard"], rating: 3.9 },
  { id: 88, name: "Royal Students Hostel", city: "Hyderabad", area: "Green Town", nearby_university: "University of Sindh", gender: "Boys", rent_pkr: 7500, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan"], rating: 3.5 },
  { id: 89, name: "Al-Rehman Girls Hostel", city: "Hyderabad", area: "Bahria Enclave", nearby_university: "University of Sindh", gender: "Girls", rent_pkr: 16000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Security Guard"], rating: 3.9 },
  { id: 90, name: "Capital Students Hostel", city: "Hyderabad", area: "Shalimar", nearby_university: "Isra University", gender: "Boys", rent_pkr: 12500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 3.6 },
  { id: 91, name: "Sunrise Lodge", city: "Gujranwala", area: "Cantt", nearby_university: "GIFT University", gender: "Boys", rent_pkr: 7500, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 4.0 },
  { id: 92, name: "Pearl Girls Hostel", city: "Gujranwala", area: "Wapda Town", nearby_university: "GIFT University", gender: "Girls", rent_pkr: 13000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Security Guard"], rating: 3.8 },
  { id: 93, name: "Silver Lodge", city: "Gujranwala", area: "Old Campus Road", nearby_university: "University of Gujrat", gender: "Boys", rent_pkr: 23500, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV"], rating: 3.0 },
  { id: 94, name: "Silver Boys Hostel", city: "Sialkot", area: "College Road", nearby_university: "University of Sialkot", gender: "Boys", rent_pkr: 11500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 3.1 },
  { id: 95, name: "Royal Girls Hostel", city: "Sialkot", area: "Faisal Town", nearby_university: "University of Sialkot", gender: "Girls", rent_pkr: 11000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Security Guard"], rating: 3.8 },
  { id: 96, name: "Al-Madina Lodge", city: "Sialkot", area: "Iqbal Town", nearby_university: "University of Sialkot", gender: "Boys", rent_pkr: 6500, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.7 },
  { id: 97, name: "Vision Residency", city: "Sialkot", area: "College Road", nearby_university: "University of Sialkot", gender: "Boys", rent_pkr: 7500, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 3.3 },
  { id: 98, name: "New Horizon Students Hostel", city: "Sialkot", area: "Iqbal Town", nearby_university: "University of Sialkot", gender: "Boys", rent_pkr: 11000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 4.1 },
  { id: 99, name: "Star Students Hostel", city: "Abbottabad", area: "Model Town", nearby_university: "COMSATS Abbottabad", gender: "Boys", rent_pkr: 7500, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan", "Common Kitchen"], rating: 4.1 },
  { id: 100, name: "National Girls Hostel", city: "Abbottabad", area: "Wapda Town", nearby_university: "Women University Abbottabad", gender: "Girls", rent_pkr: 7500, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan", "Security Guard"], rating: 4.6 },
  { id: 101, name: "Al-Madina Girls Hostel", city: "Abbottabad", area: "Civil Lines", nearby_university: "COMSATS Abbottabad", gender: "Girls", rent_pkr: 6500, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan", "Security Guard"], rating: 3.4 },
  { id: 102, name: "Vision Lodge", city: "Abbottabad", area: "Cantt", nearby_university: "COMSATS Abbottabad", gender: "Boys", rent_pkr: 9000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 4.2 },
  { id: 103, name: "Al-Rehman Residency", city: "Bahawalpur", area: "Wapda Town", nearby_university: "Islamia University Bahawalpur", gender: "Boys", rent_pkr: 9500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.6 },
  { id: 104, name: "Crown Students Hostel", city: "Bahawalpur", area: "Shalimar", nearby_university: "Islamia University Bahawalpur", gender: "Boys", rent_pkr: 8000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 4.7 },
  { id: 105, name: "Star Students Hostel", city: "Bahawalpur", area: "Civil Lines", nearby_university: "Islamia University Bahawalpur", gender: "Boys", rent_pkr: 10500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 4.5 },
  { id: 106, name: "Prime Girls Hostel", city: "Bahawalpur", area: "Garden Town", nearby_university: "Islamia University Bahawalpur", gender: "Girls", rent_pkr: 14000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Security Guard"], rating: 4.2 },
  { id: 107, name: "Metro Boys Hostel", city: "Bahawalpur", area: "Bahria Enclave", nearby_university: "Islamia University Bahawalpur", gender: "Boys", rent_pkr: 14500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 3.9 },
  { id: 108, name: "Al-Rehman Students Hostel", city: "Mingora", area: "Old Campus Road", nearby_university: "University of Swat", gender: "Boys", rent_pkr: 19500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Gym"], rating: 3.0 },
  { id: 109, name: "Silver Lodge", city: "Mingora", area: "Township", nearby_university: "University of Swat", gender: "Boys", rent_pkr: 10000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen"], rating: 3.9 },
  { id: 110, name: "Comfort Residency", city: "Mingora", area: "University Road", nearby_university: "University of Swat", gender: "Boys", rent_pkr: 8500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 4.5 },
  { id: 111, name: "Comfort Boys Hostel", city: "Mingora", area: "Bahria Enclave", nearby_university: "University of Swat", gender: "Boys", rent_pkr: 12500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 4.7 },
  { id: 112, name: "Royal Boys Hostel", city: "Mingora", area: "Shalimar", nearby_university: "University of Swat", gender: "Boys", rent_pkr: 8000, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan"], rating: 4.5 },
  { id: 113, name: "Pearl Girls Hostel", city: "Gilgit", area: "Green Town", nearby_university: "Karakoram International University", gender: "Girls", rent_pkr: 13000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Security Guard"], rating: 3.8 },
  { id: 114, name: "New Horizon Residency", city: "Gilgit", area: "Johar Town", nearby_university: "Karakoram International University", gender: "Boys", rent_pkr: 8500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.3 },
  { id: 115, name: "Vision Girls Hostel", city: "Gilgit", area: "Defence", nearby_university: "Karakoram International University", gender: "Girls", rent_pkr: 8500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler", "Security Guard"], rating: 3.8 },
  { id: 116, name: "Royal Girls Hostel", city: "Gilgit", area: "Gulshan", nearby_university: "Karakoram International University", gender: "Girls", rent_pkr: 12500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Security Guard"], rating: 4.2 },
  { id: 117, name: "Al-Madina Boys Hostel", city: "Gilgit", area: "Model Town", nearby_university: "Karakoram International University", gender: "Boys", rent_pkr: 11000, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler"], rating: 4.1 },
  { id: 118, name: "Silver Students Hostel", city: "Sukkur", area: "Iqbal Town", nearby_university: "Sukkur IBA", gender: "Boys", rent_pkr: 7000, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 3.3 },
  { id: 119, name: "Al-Madina Students Hostel", city: "Sukkur", area: "Model Town", nearby_university: "Sukkur IBA", gender: "Boys", rent_pkr: 13000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 4.5 },
  { id: 120, name: "Metro Boys Hostel", city: "Sukkur", area: "College Road", nearby_university: "Sukkur IBA", gender: "Boys", rent_pkr: 8500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen"], rating: 3.8 },
  { id: 121, name: "Metro Boys Hostel", city: "Sukkur", area: "New Town", nearby_university: "Sukkur IBA", gender: "Boys", rent_pkr: 6000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.4 },
  { id: 122, name: "Elite Lodge", city: "Sukkur", area: "Township", nearby_university: "Sukkur IBA", gender: "Boys", rent_pkr: 24500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Gym"], rating: 3.3 },
  { id: 123, name: "Vision Students Hostel", city: "Larkana", area: "Gulshan", nearby_university: "Shaheed Mohtarma Benazir Bhutto Medical University", gender: "Boys", rent_pkr: 14500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 4.9 },
  { id: 124, name: "Al-Madina Lodge", city: "Larkana", area: "Cantt", nearby_university: "Shaheed Mohtarma Benazir Bhutto Medical University", gender: "Boys", rent_pkr: 7500, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan"], rating: 3.4 },
  { id: 125, name: "Golden Girls Hostel", city: "Larkana", area: "University Road", nearby_university: "Shaheed Mohtarma Benazir Bhutto Medical University", gender: "Girls", rent_pkr: 20500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Security Guard"], rating: 3.2 },
  { id: 126, name: "Diamond Lodge", city: "Larkana", area: "New Town", nearby_university: "Shaheed Mohtarma Benazir Bhutto Medical University", gender: "Boys", rent_pkr: 8500, room_type: "Shared (4-bed)", facilities: ["WiFi", "Mess", "Fan"], rating: 3.9 },
  { id: 127, name: "Prime Girls Hostel", city: "Mardan", area: "College Road", nearby_university: "Abdul Wali Khan University", gender: "Girls", rent_pkr: 19000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Security Guard"], rating: 4.2 },
  { id: 128, name: "Vision Boys Hostel", city: "Mardan", area: "Satellite Town", nearby_university: "Abdul Wali Khan University", gender: "Boys", rent_pkr: 7000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 4.9 },
  { id: 129, name: "Elite Students Hostel", city: "Mardan", area: "Cantt", nearby_university: "Abdul Wali Khan University", gender: "Boys", rent_pkr: 12000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 4.8 },
  { id: 130, name: "Unity Girls Hostel", city: "Mardan", area: "Faisal Town", nearby_university: "Abdul Wali Khan University", gender: "Girls", rent_pkr: 6500, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan", "Security Guard"], rating: 4.8 },
  { id: 131, name: "Elite Residency", city: "Kohat", area: "Township", nearby_university: "Kohat University of Science & Technology", gender: "Boys", rent_pkr: 9000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler"], rating: 4.2 },
  { id: 132, name: "Star Lodge", city: "Kohat", area: "University Road", nearby_university: "Kohat University of Science & Technology", gender: "Boys", rent_pkr: 8500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Water Cooler"], rating: 3.6 },
  { id: 133, name: "Diamond Residency", city: "Kohat", area: "Model Town", nearby_university: "Kohat University of Science & Technology", gender: "Boys", rent_pkr: 8500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen"], rating: 3.9 },
  { id: 134, name: "Al-Madina Boys Hostel", city: "Kohat", area: "Askari", nearby_university: "Kohat University of Science & Technology", gender: "Boys", rent_pkr: 14500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC"], rating: 3.7 },
  { id: 135, name: "Green Girls Hostel", city: "Kohat", area: "Model Town", nearby_university: "Kohat University of Science & Technology", gender: "Girls", rent_pkr: 15000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Security Guard"], rating: 4.5 },
  { id: 136, name: "Pearl Lodge", city: "Dera Ghazi Khan", area: "Bahria Enclave", nearby_university: "Ghazi University", gender: "Boys", rent_pkr: 6500, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 3.5 },
  { id: 137, name: "Al-Noor Students Hostel", city: "Dera Ghazi Khan", area: "Gulshan", nearby_university: "Ghazi University", gender: "Boys", rent_pkr: 12000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 3.6 },
  { id: 138, name: "Capital Boys Hostel", city: "Dera Ghazi Khan", area: "College Road", nearby_university: "Ghazi University", gender: "Boys", rent_pkr: 11500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry"], rating: 4.2 },
  { id: 139, name: "Capital Boys Hostel", city: "Sahiwal", area: "Faisal Town", nearby_university: "University of Sahiwal", gender: "Boys", rent_pkr: 7000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 3.3 },
  { id: 140, name: "Elite Girls Hostel", city: "Sahiwal", area: "Old Campus Road", nearby_university: "University of Sahiwal", gender: "Girls", rent_pkr: 16500, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Gym", "Security Guard"], rating: 4.8 },
  { id: 141, name: "Comfort Lodge", city: "Sahiwal", area: "Bahria Enclave", nearby_university: "University of Sahiwal", gender: "Boys", rent_pkr: 6500, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 4.8 },
  { id: 142, name: "Al-Noor Boys Hostel", city: "Gujrat", area: "Gulshan", nearby_university: "University of Gujrat Main Campus", gender: "Boys", rent_pkr: 6000, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 3.4 },
  { id: 143, name: "Al-Falah Students Hostel", city: "Gujrat", area: "Garden Town", nearby_university: "University of Gujrat Main Campus", gender: "Boys", rent_pkr: 14500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "AC", "Study Room"], rating: 4.5 },
  { id: 144, name: "Crown Residency", city: "Gujrat", area: "Civil Lines", nearby_university: "University of Gujrat Main Campus", gender: "Boys", rent_pkr: 12000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "Study Room"], rating: 4.6 },
  { id: 145, name: "Al-Noor Lodge", city: "Gujrat", area: "Wapda Town", nearby_university: "University of Gujrat Main Campus", gender: "Boys", rent_pkr: 23500, room_type: "Single Room", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV", "Parking"], rating: 4.6 },
  { id: 146, name: "Blue Sky Students Hostel", city: "Rahim Yar Khan", area: "New Town", nearby_university: "Ghazi University Sub Campus", gender: "Boys", rent_pkr: 18000, room_type: "Shared (2-bed)", facilities: ["WiFi", "Mess", "AC", "Laundry", "CCTV"], rating: 4.8 },
  { id: 147, name: "Sunrise Girls Hostel", city: "Rahim Yar Khan", area: "Garden Town", nearby_university: "Ghazi University Sub Campus", gender: "Girls", rent_pkr: 6500, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan", "Security Guard"], rating: 3.7 },
  { id: 148, name: "Vision Boys Hostel", city: "Rahim Yar Khan", area: "Civil Lines", nearby_university: "Ghazi University Sub Campus", gender: "Boys", rent_pkr: 8000, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan"], rating: 4.8 },
  { id: 149, name: "Sasta Boys Hostel", city: "Rawalpindi", area: "Committee Chowk", nearby_university: "Arid Agriculture University", gender: "Boys", rent_pkr: 6000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.0 },
  { id: 150, name: "Insaf Girls Hostel", city: "Rawalpindi", area: "Chandni Chowk", nearby_university: "Arid Agriculture University", gender: "Girls", rent_pkr: 8500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Security Guard"], rating: 3.6 },
  { id: 151, name: "Al-Amin Boys Hostel", city: "Islamabad", area: "I-10", nearby_university: "COMSATS University", gender: "Boys", rent_pkr: 7000, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 3.5 },
  { id: 152, name: "Talib-e-Ilm Hostel", city: "Islamabad", area: "G-11", nearby_university: "FAST-NUCES", gender: "Boys", rent_pkr: 6500, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan"], rating: 3.3 },
  { id: 153, name: "Basic Needs Girls Hostel", city: "Islamabad", area: "I-8", nearby_university: "QAU", gender: "Girls", rent_pkr: 9000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen", "Security Guard"], rating: 3.0 },
  { id: 154, name: "Roshan Boys Hostel", city: "Lahore", area: "Baghbanpura", nearby_university: "UET Lahore", gender: "Boys", rent_pkr: 6000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 3.7 },
  { id: 155, name: "Gareeb Nawaz Hostel", city: "Lahore", area: "Misri Shah", nearby_university: "Punjab University", gender: "Boys", rent_pkr: 5500, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 3.7 },
  { id: 156, name: "Sadaqat Girls Hostel", city: "Lahore", area: "Samanabad", nearby_university: "GC University Lahore", gender: "Girls", rent_pkr: 8500, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Security Guard"], rating: 3.4 },
  { id: 157, name: "Awami Boys Hostel", city: "Karachi", area: "Landhi", nearby_university: "NED University", gender: "Boys", rent_pkr: 6500, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 3.4 },
  { id: 158, name: "Sindhi Students Hostel", city: "Karachi", area: "Nazimabad", nearby_university: "Karachi University", gender: "Boys", rent_pkr: 7500, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 3.1 },
  { id: 159, name: "Baji Girls Hostel", city: "Karachi", area: "North Nazimabad", nearby_university: "Federal Urdu University", gender: "Girls", rent_pkr: 9000, room_type: "Shared (3-bed)", facilities: ["WiFi", "Mess", "Fan", "Common Kitchen", "Security Guard"], rating: 2.8 },
  { id: 160, name: "Falak Boys Hostel", city: "Peshawar", area: "Hayatabad", nearby_university: "University of Peshawar", gender: "Boys", rent_pkr: 6000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 3.2 },
  { id: 161, name: "Sarhad Girls Hostel", city: "Peshawar", area: "University Road", nearby_university: "Islamia College", gender: "Girls", rent_pkr: 8000, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan", "Common Kitchen", "Security Guard"], rating: 3.4 },
  { id: 162, name: "Kissan Boys Hostel", city: "Faisalabad", area: "Susan Road", nearby_university: "UAF", gender: "Boys", rent_pkr: 5500, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 2.9 },
  { id: 163, name: "Rozi Boys Hostel", city: "Multan", area: "Bosan Road", nearby_university: "BZU", gender: "Boys", rent_pkr: 6000, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan"], rating: 3.7 },
  { id: 164, name: "Sargodha Sasta Hostel", city: "Sargodha", area: "University Road", nearby_university: "University of Sargodha", gender: "Boys", rent_pkr: 5500, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 3.1 },
  { id: 165, name: "Balochi Boys Hostel", city: "Quetta", area: "Sariab Road", nearby_university: "University of Balochistan", gender: "Boys", rent_pkr: 5000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.1 },
  { id: 166, name: "Sindh Girls Hostel", city: "Hyderabad", area: "Latifabad", nearby_university: "University of Sindh", gender: "Girls", rent_pkr: 8000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan", "Security Guard"], rating: 2.8 },
  { id: 167, name: "GT Road Boys Hostel", city: "Gujranwala", area: "GT Road", nearby_university: "University of Gujrat", gender: "Boys", rent_pkr: 6000, room_type: "Shared (5-bed)", facilities: ["Mess", "Fan"], rating: 3.9 },
  { id: 168, name: "Sialkoti Boys Hostel", city: "Sialkot", area: "Cantt", nearby_university: "University of Sialkot", gender: "Boys", rent_pkr: 6500, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.6 },
  { id: 169, name: "Hazara Boys Hostel", city: "Abbottabad", area: "Mandian", nearby_university: "COMSATS Abbottabad", gender: "Boys", rent_pkr: 6000, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan"], rating: 3.8 },
  { id: 170, name: "Cholistan Boys Hostel", city: "Bahawalpur", area: "Model Town", nearby_university: "Islamia University Bahawalpur", gender: "Boys", rent_pkr: 5500, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan"], rating: 3.5 },
  { id: 171, name: "Swati Boys Hostel", city: "Mingora", area: "University Road", nearby_university: "University of Swat", gender: "Boys", rent_pkr: 5000, room_type: "Shared (4-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 2.8 },
  { id: 172, name: "Sukkur Sasta Hostel", city: "Sukkur", area: "Near Sukkur IBA", nearby_university: "Sukkur IBA", gender: "Boys", rent_pkr: 6000, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan", "Water Cooler"], rating: 3.2 },
  { id: 173, name: "Mardan Boys Hostel", city: "Mardan", area: "University Road", nearby_university: "Abdul Wali Khan University", gender: "Boys", rent_pkr: 5500, room_type: "Shared (6-bed)", facilities: ["Mess", "Fan"], rating: 3.3 },
];
const FACILITY_KEYWORDS = ["wifi", "mess", "ac", "fan", "laundry", "gym", "cctv", "security", "generator", "parking"];

/* ============================================================
   CITY COORDINATES
   ============================================================ */
const CITY_COORDS = {
  "Islamabad": { lat: 33.6844, lng: 73.0479 },
  "Rawalpindi": { lat: 33.5651, lng: 73.0169 },
  "Lahore": { lat: 31.5497, lng: 74.3436 },
  "Karachi": { lat: 24.8607, lng: 67.0011 },
  "Peshawar": { lat: 34.0151, lng: 71.5249 },
  "Faisalabad": { lat: 31.4504, lng: 73.1350 },
  "Multan": { lat: 30.1575, lng: 71.5249 },
  "Sargodha": { lat: 32.0836, lng: 72.6711 },
  "Quetta": { lat: 30.1798, lng: 66.9750 },
  "Hyderabad": { lat: 25.3960, lng: 68.3578 },
  "Gujranwala": { lat: 32.1877, lng: 74.1945 },
  "Sialkot": { lat: 32.4945, lng: 74.5229 },
  "Abbottabad": { lat: 34.1463, lng: 73.2117 },
  "Bahawalpur": { lat: 29.3956, lng: 71.6722 },
  "Mingora": { lat: 34.7717, lng: 72.3604 },
  "Gilgit": { lat: 35.9208, lng: 74.3144 },
  "Sukkur": { lat: 27.7052, lng: 68.8574 },
  "Larkana": { lat: 27.5589, lng: 68.2118 },
  "Mardan": { lat: 34.1988, lng: 72.0404 },
  "Kohat": { lat: 33.5900, lng: 71.4400 },
  "Dera Ghazi Khan": { lat: 30.0561, lng: 70.6350 },
  "Sahiwal": { lat: 30.6704, lng: 73.1027 },
  "Gujrat": { lat: 32.5740, lng: 74.0789 },
  "Rahim Yar Khan": { lat: 28.4202, lng: 70.2952 },
  "Topi (Swabi)": { lat: 34.0722, lng: 72.6208 }
};

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function distanceToHostel(hostel) {
  if (!userLocation) return null;
  const from = CITY_COORDS[userLocation];
  const to = CITY_COORDS[hostel.city];
  if (!from || !to) return null;
  return Math.round(haversineKm(from.lat, from.lng, to.lat, to.lng));
}

// Rough estimate assuming average intercity road-travel speed of 55 km/h
// (accounts for city traffic + highway stretches on Pakistani routes).
function estimateTravelTime(km) {
  const avgSpeedKmh = 55;
  const totalMinutes = Math.round((km / avgSpeedKmh) * 60);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (hours === 0) return `${mins} min`;
  if (mins === 0) return `${hours} hr`;
  return `${hours} hr ${mins} min`;
}

/* ============================================================
   ICONS
   ============================================================ */
const ICONS = {
  "WiFi": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5.5 12.5a11 11 0 0 1 13 0"/><path d="M9 16.3a6 6 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none"/></svg>',
  "Mess": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2v7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2"/><path d="M9 11v11"/><path d="M17 2c-1.5 1.5-2 3.5-2 6s.5 3 2 3 2-.5 2-3-.5-4.5-2-6Z"/><path d="M17 11v11"/></svg>',
  "AC": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="6" width="20" height="6" rx="1.5"/><path d="M6 12v3M10 12v5M14 12v3M18 12v5"/></svg>',
  "Fan": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><path d="M12 12c0-3 1.5-6 4.5-6 2 0 3 1.4 3 3 0 2.6-3 3-7.5 3"/><path d="M12 12c-3 0-6-1.5-6-4.5 0-2 1.4-3 3-3 2.6 0 3 3 3 7.5"/><path d="M12 12c3 0 6 1.5 6 4.5 0 2-1.4 3-3 3-2.6 0-3-3-3-7.5"/></svg>',
  "Laundry": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="12" cy="13" r="2"/><path d="M7 6h.01"/></svg>',
  "Gym": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6.5 6.5 3 3M17.5 6.5 21 3M6.5 17.5 3 21M17.5 17.5 21 21"/><rect x="7" y="7" width="10" height="10" rx="2"/></svg>',
  "CCTV": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4Z"/><path d="M7 9v6c0 1.5 2.5 3 5 3s5-1.5 5-3V9"/><circle cx="12" cy="9" r="1" fill="currentColor" stroke="none"/></svg>',
  "Security Guard": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
  "Generator Backup": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>',
  "Parking": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 16V8h4a3 3 0 0 1 0 6H9"/></svg>',
  "Common Kitchen": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16"/><path d="M12 3a5 5 0 0 1 5 5c0 3-2 4-2 6H9c0-2-2-3-2-6a5 5 0 0 1 5-5Z"/><path d="M9 14h6"/></svg>',
  "Study Room": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
  "Water Cooler": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c3 3.5 6 7.3 6 11a6 6 0 0 1-12 0c0-3.7 3-7.5 6-11Z"/></svg>',
  "Warden Facility": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"/></svg>'
};

/* ============================================================
   LANGUAGE SUPPORT
   Three modes: "english", "roman-urdu", "urdu-script".
   detectLanguage() looks at whatever the user typed (or said),
   and everything on the results side (labels, buttons, gender
   badges, distance line) is re-rendered in that language via
   the LABELS dictionary below.
   ============================================================ */

// Common Roman Urdu words — if the typed Latin-script text contains
// enough of these, we treat it as Roman Urdu instead of English.
const ROMAN_URDU_WORDS = [
  "ka", "ki", "ke", "ko", "mein", "main", "hai", "hain", "chahiye", "chahye",
  "nazdeek", "qareeb", "qarib", "sasta", "sasti", "larke", "larka", "larki",
  "larkiyan", "larkon", "larkiyon", "kamra", "kamre", "hostel", "wala", "wali",
  "waly", "acha", "achi", "dho", "dhoondo", "dhundo", "dikhao", "dikha", "budget",
  "pass", "nazdik", "shehar", "university", "k", "sath", "aur", "bina", "waghera"
];

function detectLanguage(text) {
  if (!text) return "english";
  // Urdu / Arabic script range
  if (/[\u0600-\u06FF]/.test(text)) return "urdu-script";

  const lower = text.toLowerCase();
  const words = lower.split(/\s+/).filter(Boolean);
  let romanHits = 0;
  words.forEach(w => {
    if (ROMAN_URDU_WORDS.includes(w.replace(/[^a-z]/g, ""))) romanHits++;
  });
  // If a decent share of the words are common Roman Urdu words, call it Roman Urdu
  if (words.length > 0 && romanHits / words.length >= 0.2) return "roman-urdu";
  return "english";
}

const LABELS = {
  "english": {
    resultsFound: (n) => `${n} hostel${n !== 1 ? "s" : ""} found`,
    matchedTo: (q) => `matched to "${q}"`,
    near: "Near",
    perMonth: "/mo",
    distanceFrom: (km, loc, time) => `~${km} km &middot; approx ${time} drive from ${loc}`,
    boys: "Boys",
    girls: "Girls",
    showMore: "Show more hostels",
    contactBtn: "Contact this hostel",
    emptyTitle: "No hostels match that search yet.",
    emptyNote: "Try widening your budget or dropping a filter — we'll keep looking.",
    facilitiesTitle: "Facilities"
  },
  "roman-urdu": {
    resultsFound: (n) => `${n} hostel milay`,
    matchedTo: (q) => `"${q}" k mutabiq`,
    near: "Qareeb",
    perMonth: "/mahina",
    distanceFrom: (km, loc, time) => `~${km} km &middot; taqreeban ${time} ka safar ${loc} say`,
    boys: "Larkon k liye",
    girls: "Larkiyon k liye",
    showMore: "Aur hostels dekhein",
    contactBtn: "Is hostel say raabta karein",
    emptyTitle: "Filhaal koi hostel match nahi hua.",
    emptyNote: "Budget barhayein ya koi filter hatayein — hum dhoondtay rahengay.",
    facilitiesTitle: "Sahoolat"
  },
  "urdu-script": {
    resultsFound: (n) => `${n} ہاسٹل ملے`,
    matchedTo: (q) => `"${q}" کے مطابق`,
    near: "قریب",
    perMonth: "/ماہانہ",
    distanceFrom: (km, loc, time) => `~${km} کلومیٹر &middot; تقریباً ${time} کا سفر ${loc} سے`,
    boys: "لڑکوں کے لیے",
    girls: "لڑکیوں کے لیے",
    showMore: "مزید ہاسٹل دیکھیں",
    contactBtn: "اس ہاسٹل سے رابطہ کریں",
    emptyTitle: "ابھی کوئی ہاسٹل میچ نہیں ہوا۔",
    emptyNote: "بجٹ بڑھائیں یا کوئی فلٹر ہٹائیں — ہم تلاش جاری رکھیں گے۔",
    facilitiesTitle: "سہولیات"
  }
};

let currentLang = "english"; // updated every time a search runs

// Small set of UI strings for the mic/voice status line, shown in
// whatever language the person last searched in.
const VOICE_STRINGS = {
  "english": {
    listening: "🎤 Listening... speak now",
    error: "Couldn't understand that, please try again."
  },
  "roman-urdu": {
    listening: "🎤 Sun rahay hain... boliye",
    error: "Awaaz samajh nahi aayi, dobara koshish karein."
  },
  "urdu-script": {
    listening: "🎤 سن رہے ہیں... بولیں",
    error: "آواز سمجھ نہیں آئی، دوبارہ کوشش کریں۔"
  }
};

/* ============================================================
   "AI" NATURAL LANGUAGE INTERPRETER
   ============================================================ */
// Maps common Urdu-script city names (as Speech Recognition may transcribe
// them) to the exact English city name used in HOSTELS.
const URDU_CITY_MAP = {
  "راولپنڈی": "Rawalpindi",
  "اسلام آباد": "Islamabad",
  "اسلام اباد": "Islamabad",
  "لاہور": "Lahore",
  "کراچی": "Karachi",
  "پشاور": "Peshawar",
  "فیصل آباد": "Faisalabad",
  "فیصل اباد": "Faisalabad",
  "ملتان": "Multan",
  "سرگودھا": "Sargodha",
  "کوئٹہ": "Quetta",
  "حیدرآباد": "Hyderabad",
  "گوجرانوالہ": "Gujranwala",
  "سیالکوٹ": "Sialkot",
  "ایبٹ آباد": "Abbottabad",
  "بہاولپور": "Bahawalpur",
  "مینگورہ": "Mingora",
  "گلگت": "Gilgit",
  "سکھر": "Sukkur",
  "لاڑکانہ": "Larkana",
  "مردان": "Mardan",
  "کوہاٹ": "Kohat",
  "ساہیوال": "Sahiwal",
  "گوجرات": "Gujrat",
  "رحیم یار خان": "Rahim Yar Khan"
};

function parseQuery(rawQuery) {
  const q = rawQuery.toLowerCase();
  // Remove commas from numbers so "15,000" is read the same as "15000".
  const qNoCommas = q.replace(/(\d),(\d{3})/g, "$1$2");
  const intent = { budget: null, city: null, gender: null, university: null, facilities: [] };

  const budgetMatch = qNoCommas.match(/(\d{2,3})\s*k\b/) || qNoCommas.match(/(\d{2,3})\s*ہزار/) || qNoCommas.match(/(\d{4,6})/);
  if (budgetMatch) {
    let num = parseInt(budgetMatch[1], 10);
    if ((q.includes("k") || q.includes("ہزار")) && num < 1000) num *= 1000;
    intent.budget = num;
  }

  // If more than one city name is mentioned in the sentence (e.g. "main
  // Islamabad mein hun lekin Rawalpindi mein hostel chahiye"), the LAST one
  // mentioned is almost always the one the person actually wants — the
  // earlier one is usually just their current location.
  const cities = [...new Set(HOSTELS.map(h => h.city))];
  let bestCityIndex = -1;
  for (const city of cities) {
    const idx = q.lastIndexOf(city.toLowerCase());
    if (idx !== -1 && idx > bestCityIndex) {
      bestCityIndex = idx;
      intent.city = city;
    }
  }
  // Also check Urdu-script city names (voice input often transcribes proper
  // nouns like city names in Urdu script rather than Latin).
  for (const urduName in URDU_CITY_MAP) {
    const idx = rawQuery.lastIndexOf(urduName);
    if (idx !== -1 && idx > bestCityIndex) {
      bestCityIndex = idx;
      intent.city = URDU_CITY_MAP[urduName];
    }
  }

  // English + Roman Urdu gender words
  if (/\b(boys?|male|larka|larke|larkay|larkon|mard|bachay|bachy|bachon)\b/.test(q)) intent.gender = "Boys";
  if (/\b(girls?|female|larki|larkiyan|larkiyaan|larkiyon|aurat|khawateen|bachi|bachiyan|bachiyaan|bachiyon|bachion|bachiun)\b/.test(q)) intent.gender = "Girls";
  // Urdu-script gender words
  if (/لڑک[اوں]|لڑکے|مرد|بچے|بچوں/.test(rawQuery)) intent.gender = "Boys";
  if (/لڑکی|لڑکیوں|لڑکیاں|عورت|خواتین|بچی|بچیوں/.test(rawQuery)) intent.gender = "Girls";

  const universities = [...new Set(HOSTELS.map(h => h.nearby_university))];
  for (const uni of universities) {
    if (q.includes(uni.toLowerCase())) { intent.university = uni; break; }
  }

  intent.facilities = FACILITY_KEYWORDS.filter(f => q.includes(f));

  return intent;
}

function scoreHostel(hostel, intent) {
  let score = 0;
  if (intent.university && hostel.nearby_university.toLowerCase().includes(intent.university.toLowerCase())) score += 3;
  if (intent.city && hostel.city === intent.city) score += 2;
  if (intent.gender && hostel.gender === intent.gender) score += 2;
  if (intent.budget && hostel.rent_pkr <= intent.budget) score += 2;
  if (intent.budget && hostel.rent_pkr > intent.budget) score -= 3;
  intent.facilities.forEach(f => {
    if (hostel.facilities.some(hf => hf.toLowerCase().includes(f))) score += 1;
  });
  score += hostel.rating * 0.2;
  return score;
}

/* ============================================================
   REAL AI-POWERED QUERY UNDERSTANDING (via our own backend)
   The frontend never talks to Groq directly — it calls our own
   backend server (server.js), which holds the real Groq key in
   a .env file that never reaches the browser or GitHub. If the
   backend isn't running, or the call fails for any reason, this
   silently falls back to the rule-based parseQuery() so the app
   never breaks in a demo.
   ============================================================ */

// Backend server address. Deployed on Railway, so it's reachable from
// anywhere (not just localhost) — no dev/prod branching needed.
const BACKEND_URL = "https://ai-hostel-finder-production.up.railway.app/api/parse-query";

async function parseQueryWithAI(rawQuery) {
  try {
    const cityList = [...new Set(HOSTELS.map(h => h.city))].join(", ");
    const uniList = [...new Set(HOSTELS.map(h => h.nearby_university))].join(", ");

    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ query: rawQuery, cityList, uniList })
    });

    if (!response.ok) throw new Error("Backend error " + response.status);

    const parsed = await response.json();
    if (parsed.error) throw new Error(parsed.error);

    return {
      budget: parsed.budget || null,
      city: parsed.city || null,
      gender: parsed.gender || null,
      university: parsed.university || null,
      facilities: Array.isArray(parsed.facilities) ? parsed.facilities : []
    };
  } catch (err) {
    console.warn("Backend/AI call failed, falling back to rule-based search:", err);
    return parseQuery(rawQuery); // backend not running, network issue, etc. — fail safe, not broken
  }
}

/* ============================================================
   STATE
   ============================================================ */
let activeFilters = { city: "", budget: "", gender: "" };
let activeQuery = "";
let activeIntent = null; // result of the last parseQueryWithAI() call, reused by filters/sort
let sortBy = "relevance";
let userLocation = "";
let visibleCount = 12;
const PAGE_SIZE = 12;

function populateCityDropdown() {
  const select = document.getElementById("filter-city");
  const cities = [...new Set(HOSTELS.map(h => h.city))].sort();
  cities.forEach(city => {
    const opt = document.createElement("option");
    opt.value = city;
    opt.textContent = city;
    select.appendChild(opt);
  });

  const locationSelect = document.getElementById("user-location");
  cities.forEach(city => {
    const opt = document.createElement("option");
    opt.value = city;
    opt.textContent = city;
    locationSelect.appendChild(opt);
  });
}

function getFilteredResults() {
  let list = HOSTELS;
  let usedNlp = false;

  if (activeQuery.trim() && activeIntent) {
    usedNlp = true;
    const intent = activeIntent;
    if (intent.budget) {
      list = list.filter(h => h.rent_pkr <= intent.budget);
    }
    if (intent.gender) {
      list = list.filter(h => h.gender === intent.gender);
    }
    if (intent.city) {
      list = list.filter(h => h.city === intent.city);
    }
    list = list
      .map(h => ({ hostel: h, score: scoreHostel(h, intent) }))
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(entry => entry.hostel);
  }

  if (activeFilters.city) list = list.filter(h => h.city === activeFilters.city);
  if (activeFilters.budget) list = list.filter(h => h.rent_pkr <= parseInt(activeFilters.budget, 10));
  if (activeFilters.gender) list = list.filter(h => h.gender === activeFilters.gender);

  if (sortBy === "rent-asc") list = [...list].sort((a, b) => a.rent_pkr - b.rent_pkr);
  else if (sortBy === "rent-desc") list = [...list].sort((a, b) => b.rent_pkr - a.rent_pkr);
  else if (sortBy === "rating-desc") list = [...list].sort((a, b) => b.rating - a.rating);
  else if (!usedNlp) list = [...list].sort((a, b) => b.rating - a.rating);

  return list;
}

function iconChip(facility) {
  const icon = ICONS[facility] || "";
  return `<span class="icon-chip">${icon}<span>${facility}</span></span>`;
}

// Shown only when a natural-language search actually runs (typed submit or
// voice), so it reads as "thinking" — filter/sort dropdown changes stay instant.
function showLoadingThenRender() {
  const gridEl = document.getElementById("results-grid");
  const emptyEl = document.getElementById("empty-state");
  const loadMoreBtn = document.getElementById("load-more-btn");
  emptyEl.hidden = true;
  loadMoreBtn.hidden = true;
  gridEl.innerHTML = Array.from({ length: 3 }).map(() => '<div class="skeleton-card"></div>').join("");
}

// Runs a full natural-language search: shows a loading state, asks Claude
// (or falls back to the rule-based parser) to understand the query, then
// renders. Filter/sort dropdown changes do NOT call this — they reuse
// activeIntent and re-render instantly.
async function runSearch(queryText) {
  activeQuery = queryText;
  currentLang = detectLanguage(queryText);
  visibleCount = PAGE_SIZE;
  showLoadingThenRender();
  activeIntent = queryText.trim() ? await parseQueryWithAI(queryText) : null;
  renderResults();
}

function renderResults() {
  const results = getFilteredResults();
  const gridEl = document.getElementById("results-grid");
  const emptyEl = document.getElementById("empty-state");
  const countEl = document.getElementById("results-count");
  const noteEl = document.getElementById("results-note");
  const loadMoreBtn = document.getElementById("load-more-btn");
  const L = LABELS[currentLang] || LABELS.english;

  countEl.textContent = L.resultsFound(results.length);
  noteEl.textContent = activeQuery.trim() ? L.matchedTo(activeQuery.trim()) : "";

  gridEl.innerHTML = "";

  if (results.length === 0) {
    emptyEl.hidden = false;
    emptyEl.querySelector("p").textContent = L.emptyTitle;
    emptyEl.querySelector("span").textContent = L.emptyNote;
    loadMoreBtn.hidden = true;
    return;
  }
  emptyEl.hidden = true;

  const shown = results.slice(0, visibleCount);

  shown.forEach((h, index) => {
    const card = document.createElement("div");
    card.className = `hostel-card ${h.gender === "Girls" ? "gender-girls" : "gender-boys"}`;
    card.dataset.id = h.id;
    card.style.animationDelay = `${Math.min(index, 8) * 0.04}s`;

    const visibleFacilities = h.facilities.slice(0, 3);
    const extraCount = h.facilities.length - visibleFacilities.length;
    const distance = distanceToHostel(h);
    const distanceLine = distance !== null
      ? `<p class="card-distance">${L.distanceFrom(distance, userLocation, estimateTravelTime(distance))}</p>`
      : "";
    const genderLabel = h.gender === "Girls" ? L.girls : L.boys;

    card.innerHTML = `
      <div class="card-top">
        <h3 class="card-name">${h.name}</h3>
        <span class="card-rent">Rs ${h.rent_pkr.toLocaleString()}${L.perMonth}</span>
      </div>
      <p class="card-meta">${h.area}, ${h.city}<br>${L.near} ${h.nearby_university} &middot; ${h.room_type}</p>
      ${distanceLine}
      <div class="card-icons">
        ${visibleFacilities.map(iconChip).join("")}
        ${extraCount > 0 ? `<span class="icon-chip more-chip">+${extraCount} more</span>` : ""}
      </div>
      <div class="card-bottom">
        <span class="gender-badge">${genderLabel}</span>
        <span class="card-rating">★ ${h.rating.toFixed(1)}</span>
      </div>
    `;
    card.addEventListener("click", () => openModal(h));
    gridEl.appendChild(card);
  });

  loadMoreBtn.hidden = visibleCount >= results.length;
  // Only the last text node holds the visible label; leave the SVG and any
  // whitespace nodes before it untouched to avoid duplicating the text.
  const textNodes = Array.from(loadMoreBtn.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
  if (textNodes.length > 0) {
    textNodes.slice(0, -1).forEach(n => { n.textContent = ""; });
    textNodes[textNodes.length - 1].textContent = " " + L.showMore + " ";
  }
}

/* ============================================================
   WHATSAPP CONTACT
   Demo number — replace with a real hostel/team contact number
   before going live. Format: country code + number, no + or spaces.
   ============================================================ */
const DEMO_WHATSAPP_NUMBER = "923001234567";

const WHATSAPP_MESSAGE = {
  "english": (h) => `Hi! I'm interested in ${h.name} (${h.area}, ${h.city}). Is a room still available for Rs ${h.rent_pkr.toLocaleString()}/month?`,
  "roman-urdu": (h) => `Assalam-o-Alaikum! Mujhy ${h.name} (${h.area}, ${h.city}) mein dilchaspi hai. Kya Rs ${h.rent_pkr.toLocaleString()}/mahina wala kamra abhi available hai?`,
  "urdu-script": (h) => `السلام علیکم! مجھے ${h.name} (${h.area}, ${h.city}) میں دلچسپی ہے۔ کیا Rs ${h.rent_pkr.toLocaleString()}/ماہانہ والا کمرہ ابھی دستیاب ہے؟`
};

function buildWhatsAppLink(h) {
  const msgFn = WHATSAPP_MESSAGE[currentLang] || WHATSAPP_MESSAGE.english;
  const text = encodeURIComponent(msgFn(h));
  return `https://wa.me/${DEMO_WHATSAPP_NUMBER}?text=${text}`;
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(h) {
  const overlay = document.getElementById("modal-overlay");
  const modal = overlay.querySelector(".modal");
  const body = document.getElementById("modal-body");
  const L = LABELS[currentLang] || LABELS.english;

  modal.className = `modal ${h.gender === "Girls" ? "gender-girls" : "gender-boys"}`;

  const distance = distanceToHostel(h);
  const distanceLine = distance !== null
    ? `<br>${L.distanceFrom(distance, userLocation, estimateTravelTime(distance))}`
    : "";
  const genderLabel = h.gender === "Girls" ? L.girls : L.boys;

  body.innerHTML = `
    <h3 class="modal-title">${h.name}</h3>
    <div class="modal-rent">Rs ${h.rent_pkr.toLocaleString()}${L.perMonth}</div>
    <div class="modal-meta">
      ${h.area}, ${h.city}<br>
      ${L.near} ${h.nearby_university}${distanceLine}<br>
      ${h.room_type} &middot; ★ ${h.rating.toFixed(1)} &middot; <span class="gender-badge">${genderLabel}</span>
    </div>
    <div class="modal-section-title">${L.facilitiesTitle}</div>
    <div class="modal-facilities">
      ${h.facilities.map(iconChip).join("")}
    </div>
    <a class="modal-contact-btn" href="${buildWhatsAppLink(h)}" target="_blank" rel="noopener noreferrer">
      <svg class="border-trace" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <rect class="trace-a" x="1.5" y="1.5" width="97" height="97" rx="10" ry="10" pathLength="100" fill="none" stroke="var(--btn)" stroke-width="0.6" stroke-dasharray="4 3 2 4 6 2 3 3"/>
            <rect class="trace-b" x="1.5" y="1.5" width="97" height="97" rx="10" ry="10" pathLength="100" fill="none" stroke="#ffffff" stroke-width="0.6" stroke-dasharray="4 3 2 4 6 2 3 3"/>
      </svg>
      ${L.contactBtn}
    </a>
  `;

  overlay.hidden = false;
}

function closeModal() {
  document.getElementById("modal-overlay").hidden = true;
}

/* ============================================================
   CLICK SOUND
   ============================================================ */
let audioCtx = null;
function playClickSound() {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1100, now);
    osc.frequency.exponentialRampToValueAtTime(280, now + 0.18);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.3, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 2200;

    osc.connect(filter).connect(gain).connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.3);

    const shimmer = audioCtx.createOscillator();
    const shimmerGain = audioCtx.createGain();
    shimmer.type = "sine";
    shimmer.frequency.setValueAtTime(2200, now);
    shimmerGain.gain.setValueAtTime(0.05, now);
    shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
    shimmer.connect(shimmerGain).connect(audioCtx.destination);
    shimmer.start(now);
    shimmer.stop(now + 0.05);
  } catch (e) {
    // Silently ignore if the browser blocks audio (e.g. no user gesture yet)
  }
}

/* ============================================================
   VOICE SEARCH (Web Speech API)
   Tapping the mic button records speech, converts it to text,
   drops it into the search box, and runs the search — same as
   if the person had typed it and pressed Search.
   ============================================================ */
let recognition = null;
let isListening = false;

function setupVoiceSearch() {
  const micBtn = document.getElementById("mic-btn");
  const statusEl = document.getElementById("voice-status");
  const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognitionAPI) {
    micBtn.disabled = true;
    micBtn.title = "Voice search not supported in this browser";
    return;
  }

  recognition = new SpeechRecognitionAPI();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  // 'ur-PK' understands both Urdu speech and most Pakistani-accented
  // English/Roman-Urdu speech reasonably well in Chrome.
  recognition.lang = "ur-PK";

  recognition.addEventListener("start", () => {
    isListening = true;
    micBtn.classList.add("listening");
    statusEl.hidden = false;
    statusEl.textContent = (VOICE_STRINGS[currentLang] || VOICE_STRINGS.english).listening;
  });

  recognition.addEventListener("result", async (event) => {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById("search-input");
    input.value = transcript;
    await runSearch(transcript);
  });

  recognition.addEventListener("error", () => {
    statusEl.textContent = (VOICE_STRINGS[currentLang] || VOICE_STRINGS.english).error;
    setTimeout(() => { statusEl.hidden = true; }, 2500);
  });

  recognition.addEventListener("end", () => {
    isListening = false;
    micBtn.classList.remove("listening");
    setTimeout(() => { statusEl.hidden = true; }, 1200);
  });

  micBtn.addEventListener("click", () => {
    if (isListening) {
      recognition.stop();
      return;
    }
    try {
      recognition.start();
    } catch (e) {
      // start() throws if called while already running; ignore
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  populateCityDropdown();
  renderResults();
  setupVoiceSearch();

  document.getElementById("search-form").addEventListener("submit", async e => {
    e.preventDefault();
    await runSearch(document.getElementById("search-input").value);
  });

  document.getElementById("filter-city").addEventListener("change", e => {
    activeFilters.city = e.target.value;
    visibleCount = PAGE_SIZE;
    renderResults();
  });
  document.getElementById("filter-budget").addEventListener("change", e => {
    activeFilters.budget = e.target.value;
    visibleCount = PAGE_SIZE;
    renderResults();
  });
  document.getElementById("filter-gender").addEventListener("change", e => {
    activeFilters.gender = e.target.value;
    visibleCount = PAGE_SIZE;
    renderResults();
  });
  document.getElementById("sort-by").addEventListener("change", e => {
    sortBy = e.target.value;
    renderResults();
  });
  document.getElementById("user-location").addEventListener("change", e => {
    userLocation = e.target.value;
    renderResults();
  });
  document.getElementById("load-more-btn").addEventListener("click", () => {
    visibleCount += PAGE_SIZE;
    renderResults();
  });

  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", e => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  document.addEventListener("click", e => {
    if (e.target.closest("button, .hostel-card, .modal-contact-btn")) {
      playClickSound();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
