
`	`**Glassy and Grounded Vaccination System**

“*A blockchain based supply chain aiming to provide vaccination to all sections of society in a fast, efficient and transparent manner considering all the ground realities“*

- ### Concept 1 : Blockchain based supply chain

In a supply chain(without blockchain) consumers’ trust is vested on the various parties involved in the process. This trust when broken breaks the integrity of the whole system. This results in theft, fraud, smuggling & black marketing of vaccines, and other illegal activities for which the end user has to pay, either in time, money or the discomfort caused. Blockchain mitigates the above vulnerabilities of a supply chain by introducing the following features:

- Transparency

A blockchain based supply chain is transparent. This ensures the consumers’ trust is vested on the system and not on the various parties involved in the chain.

- Product Authenticity

Vaccine vials in a blockchain based supply chain are allotted a unique identification number, which helps in proving the authenticity of the product.

- Security

Blockchain based supply chains provide end-to-end traceability of vaccine vials thus preventing any sort of theft, fraud, or black marketing of vaccines.

- Flexibility

Blockchain can be easily incorporated into an already existing supply chain.

- Scalability

Blockchain based supply chains  can be easily scaled without any change in code.

- Reduce friction within supply chain

end-to-end visibility to reduce the administrative costs of handling dispute resolutions and conducting product recalls

- ### Concept 2 : The 3-Tier System

To overcome all the disadvantages and efficiently utilise all the advantages of the existing supply chains, we propose a 3-tier vaccination system. In this system, the vaccine from the manufacturer, through a network of temperature controlled supply chains (called cold-chain), reaches the hospitals. From hospitals, the vaccines reach the end-consumers using three different forms of supply chain based on the category the end-user falls in.


- Tier-1 (Mobile Vaccination Vans)

This Vaccination system is focused on Homebound people. To prevent vaccine wastage and ensure safe and effective vaccination, the following measures could be taken:

- Clustering System :

Vaccinating the family and caretakers of the homebound person and estimating the number of doses needed as accurately as possible increases the efficiency of the system. Getting information about recipients and their caregivers in advance helps to determine how many doses will be needed. The plan is to use all doses in a vial transported for home vaccination to minimize wasting vaccine doses, such as having contingency plans for vaccination of caregivers, or other persons in the home, and the locality to avoid vaccine wastage.

- Instant Registration :

For the vaccination of people unable to register for vaccination (people without mobile phones) or illiterate people, the last hours of vaccination is reserved for them. This improves the efficiency of the system, and also takes into account vaccination of this group of people, which also has been unable to receive vaccination so far.

- Maximum Utilisation :

For vans vaccinating urban areas(areas with high population density), the vans are allotted vaccines according to the maximum number of people it can vaccinate within the approved time frame. Whereas for rural areas, vans are allotted vaccines according to the population of the maximum area it can cover within the approved time frame. Travel plans are mapped out to ensure vaccine is utilized within the approved time frames for use of vaccine at different temperatures, including factoring in pre-vaccination preparation time, and post-vaccination observation time.

- Tier-2 (Public Parking Lots)

This system is focused mostly on urban areas, where the population density is high, the risk of overcrowding and congested vaccination rooms is high, and the majority of the population have a 4-wheeler vehicle. In a report published by the Statista Research Department, on May 12, 2021, 55 percent of the respondents of a survey across India said that they owned a car [\[source\]](https://www.statista.com/statistics/1027474/india-car-owners-by-gender/). This statistic is even higher in urban areas. A similar vaccination campaign was carried out at Kodak Hawkeye parking lot in Rochester, New York. The campaign is regarded as a huge milestone in mass vaccination[\[source\]](https://www.whec.com/coronavirus/mass-vaccination-site-opens-at-old-kodak-hawkeye-parking-lot/6030495/). These statistics prove the parking lot vaccination system to be efficient and reliable.

- Tier-3 (Hospital Campus)

This process is similar to the current method most countries including India have adopted. This vaccination system is to vaccinate all the people that don't fall in any other vaccination process. These includes

- People unable to register

Illiterate people or people with no access to the internet will be unable to register using any medium. Thus, these people can reach their nearest hospital and can register for their vaccination. The only requirement for registering is having any proof of identity deemed valid by the Government of India (mostly aadhar card).

- People who missed their slots

In case, a person has been unable to get vaccination during his allotted slot, he/she can book a slot at his nearest hospital.

- Others

All people who don't fall in any other category have to book a slot for vaccination at  their nearest hospital campus.

- ### Concept 3 : Maintain Authenticity of Vaccination

Being able to differentiate between a fake vaccine from a real one is important for maintaining trust in the system. This is where the unique identification number of vaccine and QR code comes into play.

- During vaccination, the vaccine QR code and people’s QR code is scanned.
- An anti-fraud mechanism is created which will send an alert  to the vaccination inspection team and to the local police department whenever an exception in data is administered.
- Every vial of vaccine contains 10 doses. If the same vaccine vial is used eleventh time, the smart contract will call the anti-fraud mechanism .
- If a fraudulent person creates a duplicate vaccine vial using a random or previously used QR code and tries to vaccinate people using it, the anti-fraud mechanism will be called.



- ### Concept 4 : Verifying Identity of People

- On successful [registration](#kix.dc9gqe2duyf7), a table entry will be created into our database containing a string field for aadhaar number and boolean fields for dose 1 and dose 2.
- If anyone tries to register from an aadhaar more than twice, then registration will fail.
- After our [slot management](#kix.di71vu6c5vfz), a QR code will be sent to the registered individual.
- The QR code has information like a person's aadhar ,dose count,venue of vaccination.
- It will be used to verify individuals on the spot at the vaccination points.
- If the current location and time of the scanner is matched with the QR code’s venue the authentication has been done.

**IMPLEMENTATION**

We want to begin from the very beginning of the entire vaccination cycle that is the buying of vaccines from various manufactures and distributing them to hospitals and vaccination camps.

================Begin===================

- **Smart Contract**

A [smart contract](https://www.investopedia.com/terms/s/smart-contracts.asp) named “main contract” will be created which contains the total number of vaccines currently available.

- **Matic mainnet**

This contract will be deployed on the [matic-mainnet](https://docs.matic.network/docs/develop/network-details/network). Since this network is public, a transparency is maintained which increases the trust in the system.

=============Purchase of vaccine===========

- **Manufacturer form**

A manufacturer has to apply at our portal via  the manufacturer form present at the “/newManufacturer” route.

- **Approval of health ministry**

The details of applying manufacturers will be mailed to the health ministry which will handle the validation and approval of a manufacturer.

- **QR Code Generation**

After being approved by the health ministry, a [BIP39 mnemonic phrase](https://privacypros.io/wallets/mnemonic-phrase) will be given to each manufacturer. This mnemonic is used by manufacturers to print a QR code which is unique to every vial of vaccine.

============Transportation to Hospital============

- **End-to-end traceability**

Every manufacturer, warehouse, transport and hospital in the supply chain when registered will have a contract on the blockchain network. These contracts will store a number of vaccine vials currently under its supervision.

- **Smart transaction**

Whenever a vaccine is being shipped, a transaction is created which alters the data in the contracts. For eg. While transporting a stock of vaccines from the manufacturer to a warehouse via a transport vehicle, a transaction occurs between the vehicle and the manufacturer on departure of the vehicle and a transaction occurs between vehicle and warehouse on arrival of vehicle. Both of these transactions alter the data in the contracts accordingly.

=========Allotment of vaccines to hospitals=========

- **Hospital Registration form**

A hospital has to be registered to our portal through a new-hospital form present at the “/newHospital” route which will create a smart contract linked to the main contract.The fields of our new-hospital form includes :

- total capacity in hospital campus
- total number of nearby parking lots that can be converted into vaccination camps and their capacity
- Number of vehicles which could be converted into mobile vaccination vans
- Number of trained doctors qualified for vaccination
- Number of technical support present at the hospital
- **Vaccine Allotment**

An estimate of the number of vaccines required will be calculated by our [algorithm](#kix.gmpjdtbej7ei) on the basis of form data and some assumptions. If the number of vaccines in a given hospital is less than two days' requirement, the next vaccine allotment cycle is initiated.

============Registration of people===============

- **Public Registration**

People can register for vaccination through a new-registration form on the “/newRegistration” route of our portal. The content of registration from includes :

- Name
- Age
- Address(Current location if possible)
- Aadhar number
- Has Vehicle Yes / No
- Is Person with disability Yes / No 
- Certificate for temporal immobility (If applicable)
- If a person is Person with disability or has Certificate for temporal immobility
  - Another legend of the fields will be visible to add their caretakers and family members.
  - ` `The aadhar of family members is required to be registered.They will be vaccinated with PWD people at their own home.
- **Pre-registration check**

The registration will be successful if the aadhar number is not already in our database or just one dose is given and the re-registration is after 3 months from dose 1 time stamp. 

- We ensure a slot for vaccination of registered persons is within 7 days.
- The slot and the location of vaccination will be provided through SMS and Email with a special generated [QR code](#kix.ajo4cfhsn4zy) for authentication.


===============Slot management=============

- **Slots in Mobile Vans**
  - We first process data of homebound people. We will cluster them with the locality.
  - A locality will be given priority according to the number of homebound clusters and will be managed by a mobile van from the nearest hospital.
  - If the number of vaccination slots are left in the van then the nearest registered people will be given slots in that van.
  - Nearest people will be considered in accordance with the population density of the area.
  - If still doses are left in the van then,the remaining hours will be treated as Go-on hours(Anyone without registration can come and get vaccinated via a process of [instant registration](#kix.ymqfu31wna5a)).
  - If the number of homebound people are insignificant then these mobile vans are sent to backward societies to vaccinate unregistered people.

- **Slots in Parking lots**
  - The parking lots will be given priority in accordance with the number of registered people in its locality with a vehicle.
  - The registered people with vehicles will be given slots.
  - If doses are left then it will work as go-on slots.
  - The slot will be given to the people in a radius of 5 km.
- **Slots in Hospitals**
  - All the people if registered will be given slots after mobile vans and parking lots.
  - The remaining doses will be treated as Go-on slots. 

The time slots are given to people on the basis of the number of vaccines that could be injected in an hour, taken from past experiences and expert advice.

Everyone will be sent a QR code through SMS and E-mail on slot booking, containing the information of aadhar, where to get vaccinated and when to get vaccinated.

==========Authentication and After process=========

- **Scanner allotment**

In every camp, a technical assistant is incorporated with a doctor. A scanning device is given to every technical assistant registered to our portal at the “/newScanner” route.

- **Role of Technical Assistant**

To authenticate a  person, the technical assistant just needs to scan his QR code. By scanning the QR code ,the vaccination venue is extracted and tried to match with the live location of the scanning device.If matched you may proceed further.

- Before opening any veil of vaccine one has to write the serial number or scan the QR code of the veil, so that we could keep track of which serial number veil is opened at which camp.
- **Authentication**

At vaccination points, after vaccination hours (maybe at 6 pm), a function ‘vaccinated()’ is called,which will implement the [anti-fraud mechanism](#kix.3kbgzbxetot2). If this passes, then we will subtract the number of vials used that day from the hospital contract.

===============Some Add Ons===============

- Maybe some hospitals have requirements for technical assistants,  so we provide a vacancy form for hiring of technical personnel if there is any vacancy.
- For security purposes, information about the vaccination camps will be sent to the nearest police station
- A suggestion page will be available for everyone.

**Vaccine requirement estimation algorithm**

Number of vaccination teams = min(technical assist, trained doctors)

Assuming working hours for vaccination will be 9:00 AM to 5:00 PM(= 480 minutes). Almost 1 hour will be utilised in pre-vaccination preparations.

Thus, Total time for vaccination = 420 minutes

Maximum number of vaccinations possible in one day(X) = (Number of vaccination teams \* Average time per vaccination) / Total time

Max number of vaccines required(R) = 

minimum(vaccine storage capacity, X/Number of doses in 1 vial)

Priority factor(P) = number of cases in past 3 weeks in the area under the hospitals supervision

The number of vaccines supplied to a hospital is in ratio of its (R \* P) value

Thus,

`	`Number of vaccines supplied to hospital x (Nx) = (Rx \* Px)/Σ(Ri \* Pi)


**Final words**

- Admitting the fact that we lack good writing skills, if you feel some part of the solution is not explained well or is unambiguous, please let us know by commenting there. We will try to explain our solution in the best way possible. 
- While designing a vaccination system at such a huge scale, even leaving a few corner cases may lead to a collapse of the whole system. If you think a few corner cases have been left by us, please let us know.
