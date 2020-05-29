/*
    Created: 3 March 2020
    Summary: This file contains all of the 2020 currently active or running presidential candidate information including bio information and their response to:
    immigration, healthcare, energy and environmental issues, trade, the economy, education, gun regulation, criminal justice, and foreign policy.
*/

const candidates = {
    "biden" : {
        "immigration" : "humane immigration policy that upholds our values, strengthens our economy, and secures our border. It’s no secret that our immigration system is broken, and for years, we have lacked the political will to fix it. We can secure our border and enforce our laws without tossing aside our values, our principles, and our humanity. Putting people in cages and tearing children away from their parents isn’t the answer. We have got to address the root causes of migration that push people to leave behind their homes and everything they know to undertake a dangerous journey for the chance at a better life, work that Vice President Biden led in the Obama-Biden Administration. At the same time, we must never forget that immigration is the reason the United States has been able to constantly renew and reinvent itself–legal immigration is an incredible source of strength for our country.",

        "healthcare" : "protecting and building on the Affordable Care Act instead of switching to a Medicare for All system. As president, Biden will stop this reversal of the progress made by Obamacare. And he won’t stop there. He’ll also build on the Affordable Care Act with a plan to insure more than an estimated 97% of Americans. Here’s how: Giving Americans a new choice, a public health insurance option like Medicare. Increasing the value of tax credits to lower premiums and extend coverage to more working Americans. Expanding coverage to low-income Americans. All Americans will have a new, more affordable option. Middle class families will get a premium tax credit to help them pay for coverage. Premium tax credits will be calculated to help more families afford better coverage with lower deductibles. Stop “surprise billing.” Tackle market concentration across our health care system. Lower costs and improve health outcomes by partnering with the health care workforce. Repealing the outrageous exception allowing drug corporations to avoid negotiating with Medicare over drug prices. Limiting launch prices for drugs that face no competition and are being abusively priced by manufacturers. Limiting price increases for all brand, biotech, and abusively priced generic drugs to inflation. Allowing consumers to buy prescription drugs from other countries. Terminating pharmaceutical corporations’ tax break for advertisement spending. Improving the supply of quality generics. Expanding access to contraception and protect the constitutional right to an abortion. Reducing our unacceptably high maternal mortality rate, which especially impacts people of color. Defending health care protections for all, regardless of gender, gender identity, or sexual orientation. Achieving mental health parity and expanding access to mental health care.",

        "energy and environmental issues" : "will lead the world to address the climate emergency and lead through the power of example, by ensuring the U.S. achieves a 100% clean energy economy and net-zero emissions no later than 2050. Ensure the U.S. achieves a 100% clean energy economy and reaches net-zero emissions no later than 2050. Build a stronger, more resilient nation. On day one, Biden will make smart infrastructure investments to rebuild the nation and to ensure that our buildings, water, transportation, and energy infrastructure can withstand the impacts of climate change. Rally the rest of the world to meet the threat of climate change. Stand up to the abuse of power by polluters who disproportionately harm communities of color and low-income communities. Fulfill our obligation to workers and communities who powered our industrial revolution and subsequent decades of economic growth.",

        "trade" : "First and foremost, we must enforce existing trade laws and invest in the competitiveness of our workers and communities here at home, so that they compete on a level playing field. Then, we need to write the rules of the road for international trade through a modern, inclusive process—rules that protect our workers, safeguard the environment, uphold labor standards and middle-class wages, foster innovation, and take on big global challenges like corporate concentration, corruption, and climate change. If we don’t, other countries will write the rules for us. We can no longer separate trade policy from our climate objectives. Biden will not allow other nations, including China, to game the system by becoming destination economies for polluters, undermining our climate efforts and exploiting American workers and businesses.",

        "economy" : "The American middle class built this country. Yet today, CEOs and Wall Street are putting profits over workers, plain and simple. It’s wrong. There used to be a basic bargain in this country that when you work hard, you were able to share in the prosperity your work helped create. It’s time to restore the dignity of work and give workers back the power to earn what they’re worth. It’s well past time that we increase the federal minimum wage to $15. We should stop companies from classifying low wage workers as managers in order to avoid paying them the overtime they’ve earned. We have to stop Republican attempts to strip away workers’ rights to form unions and collectively bargain. We also have to stand up against wage suppression through non-compete clauses. And, we need to put an end to unnecessary occupational licensing requirements.",

        "education" : "a plan that provides educators the support and respect they need and deserve, and invests in all children from birth, so that regardless of their zip code, parents’ income, race, or disability, they are prepared to succeed in tomorrow’s economy. Support our educators by giving them the pay and dignity they deserve. Invest in resources for our schools so students grow into physically and emotionally healthy adults, and educators can focus on teaching. Ensure that no child’s future is determined by their zip code, parents’ income, race, or disability. Provide every middle and high school student a path to a successful career. Start investing in our children at birth",

        "gun regulation" : "As president, Biden will pursue constitutional, common-sense gun safety policies. Biden will: Hold gun manufacturers accountable. Ban the manufacture and sale of assault weapons and high-capacity magazines. Buy back the assault weapons and high-capacity magazines already in our communities. Reduce stockpiling of weapons. Require background checks for all gun sales. Create an effective program to ensure individuals who become prohibited from possessing firearms relinquish their weapons. Give states incentives to set up gun licensing programs. Establish a new Task Force on Online Harassment and Abuse to focus on the connection between mass shootings, online harassment, extremism, and violence against women. Put America on the path to ensuring that 100% of firearms sold in America are smart guns. Prioritize prosecution of straw purchasers. Dedicate the brightest scientific minds to solving the gun violence public health epidemic. Prohibit the use of federal funds to arm or train educators to discharge firearms. Address the epidemic of suicides by firearms.",

        "criminal justice" : "will strengthen America’s commitment to justice and reform our criminal justice system. We can and must reduce the number of people incarcerated in this country while also reducing crime. No one should be incarcerated for drug use alone. Instead, they should be diverted to drug courts and treatment. Reducing the number of incarcerated individuals will reduce federal spending on incarceration. These savings should be reinvested in the communities impacted by mass incarceration. Our criminal justice system cannot be just unless we root out the racial, gender, and income-based disparities in the system. Black mothers and fathers should feel confident that their children are safe walking the streets of America. And, when a police officer pins on that shield and walks out the door, the officer’s family should know they’ll come home at the end of the day. Additionally, women and children are uniquely impacted by the criminal justice system, and the system needs to address their unique needs. Our criminal justice system must be focused on redemption and rehabilitation. Making sure formerly incarcerated individuals have the opportunity to be productive members of our society is not only the right thing to do, it will also grow our economy. No one should be profiteering off of our criminal justice system.",

        "foreign policy" : "must lead not just with the example of power, but the power of our example. Defend our Vital Interests: As president, Biden will never hesitate to protect the American people, including when necessary, by using force. We have the strongest military in the world—and as president, Biden will ensure it stays that way. End Forever Wars: Biden will end the forever wars in Afghanistan and the Middle East, which have cost us untold blood and treasure. Elevate Diplomacy: As president, Biden will elevate diplomacy as the premier tool of our global engagement. He will rebuild a modern, agile U.S. Department of State—investing in and re-empowering the finest diplomatic corps in the world and leveraging the full talent and richness of America’s diversity. Restore and Reimagine Partnerships: A Biden administration will do more than restore our historic partnerships; it will lead the effort to reimagine them for the future. Renew our Commitment to Arms Control for a New Era Rally the World to Address the Existential Climate Crisis: The Biden administration will rejoin the Paris Climate Accord on day one and lead a major diplomatic push to raise the ambitions of countries’ climate targets.",

        "impeachment" : "To preserve our Constitution, our democracy, our basic integrity, [donald trump] should be impeached.",

        "source" : "https://joebiden.com/",

        "page" : "biden.html",

        "bio" : "Biden was born in 1942 in Scranton, Pennsylvania. When he was 13 years old, his family moved to Mayfield, Delaware. He graduated from the University of Delaware with a degree in history and political science and received his law degree from the Syracuse University Law School. Biden practiced law and worked as a public defender before seeking public office. From 1970 to 1972, Biden served on the New Castle County Council. He was elected to represent Delaware in the U.S. Senate at the age of 29, receiving 58% of the vote to defeat incumbent Sen. James Caleb Boggs (R). Two weeks after the election, his wife and daughter were killed in a car accident, which his two sons survived. Biden served in the Senate from 1973 to 2009. During his Senate career, he chaired the Senate Judiciary Committee and the Committee on Foreign Relations for several years. Biden launched his first presidential bid in 1987 but withdrew from the race. He launched a second presidential campaign in 2007, dropping out of the race following the 2008 Iowa caucuses, where he placed fifth. Then-candidate Barack Obama announced Biden was his choice for running mate in August 2008, and the pair won the general election. Biden served as vice president from 2009 to 2017.",

        "name" : "Joe Biden",

        "party" : "D",

        "status" : true,

        "image" : "biden.png",

        "answers" : {
            "Immigration" : [false, true, true],
            "Healthcare" : [true, true, true],
            "Energy and Environmental Issues" : [true, true, false],
            "Trade" : [true],
            "Economy" : [true, true, true, true, false],
            "Education" : [false, false, true, false],
            "Gun Regulation" : [true, false, true, true],
            "Criminal Justice" : [true, false, true, false, false, true],
            "Foreign Policy" : [true, true, true, false, true, true, true],
            "Domestic Policy" : [true, false, true, true, true, false]
        }
    },
    "sanders" : {
        "immigration" : "supports creating a pathway to citizenship, providing legal status to DACA-eligible immigrants, and restructuring the Immigration and Customs Enforcement agency. Enact comprehensive immigration reform, including a path towards citizenship. Expand DACA and DAPA, including providing immediate legal status for young people eligible for the DACA program and developing a humane policy for those seeking asylum. Completely reshape and reform our immigration enforcement system, including fundamentally restructuring ICE, an agency Senator Sanders voted against creating. End the barbaric practice of family separation and detention of children in cages. Dismantle cruel and inhumane deportation programs and detention centers. Establish standards for independent oversight of relevant agencies within DHS.",

        "healthcare" : "guaranteeing health care to all people as a right, not a privilege, through a Medicare-for-all, single-payer program. Today, more than 30 million Americans still don’t have health insurance and even more are underinsured. Even for those with insurance, costs are so high that medical bills are the number one cause of bankruptcy in the United States. Incredibly, we spend significantly more of our national GDP on this inadequate health care system—far more per person than any other major country. And despite doing so, Americans have worse health outcomes and a higher infant mortality rate than countries that spend much less on health care. Our people deserve better. We should be spending money on doctors, nurses, mental health specialists, dentists, and other professionals who provide services to people and improve their lives. We must invest in the development of new drugs and technologies that cure disease and alleviate pain—not wasting hundreds of billions of dollars a year on profiteering, huge executive compensation packages, and outrageous administrative costs. The giant pharmaceutical and health insurance lobbies have spent billions of dollars over the past decades to ensure that their profits come before the health of the American people. We must defeat them, together.",

        "energy and environmental issues" : "climate crisis is \"the single greatest challenge facing our country\" and supports implementing the Green New Deal. Reaching 100 percent renewable energy for electricity and transportation by no later than 2030 and complete decarbonization by 2050 at latest. Ending unemployment by creating 20 million jobs needed to solve the climate crisis. Directly invest an historic $16.3 trillion public investment toward these efforts. A just transition for workers. Declaring climate change a national emergency. Saving American families money by weatherizing homes and lowering energy bills, building affordable and high-quality, modern public transportation, providing grants and trade-in programs for families and small businesses to purchase high-efficiency electric vehicles, and rebuilding our inefficient and crumbling infrastructure, including deploying universal, affordable high-speed internet. Supporting small family farms by investing in ecologically regenerative and sustainable agriculture. Justice for frontline communities. Commit to reducing emissions throughout the world. Meeting and exceeding our fair share of global emissions reductions. Making massive investments in research and development. Expanding the climate justice movement. Investing in conservation and public lands to heal our soils, forests, and prairie lands. This plan will pay for itself over 15 years. We will pay for the massive investment we need to reverse the climate crisis by: Making the fossil fuel industry pay for their pollution, through litigation, fees, and taxes, and eliminating federal fossil fuel subsidies. Generating revenue from the wholesale of energy produced by the regional Power Marketing Authorities. Scaling back military spending on maintaining global oil dependence. Collecting new income tax revenue from the 20 million new jobs created by the plan. Reduced need for federal and state safety net spending due to the creation of millions of good-paying, unionized jobs. Making the wealthy and large corporations pay their fair share.",

        "trade" : "We need a new trade policy that creates decent-paying jobs in America and ends the race to the bottom. Corporate America cannot continue to throw American workers out on the street while they outsource our jobs and enjoy record-breaking profits. Despite the president’s tough rhetoric and haphazard tariffs, under Trump, we now have a record-breaking $890 billion annual trade deficit in goods. And since Trump was elected, multinational corporations have shipped 185,000 American jobs overseas. That is unacceptable. As part of a new trade policy, we must: Eliminate the incentives baked into our current trade and tax agreements that make it easier for multinational corporations to ship jobs overseas. Corporations should not be able to get a tax deduction for the expenses involved in moving their factories abroad and throwing American workers out on the street. Instead of providing federal tax breaks, contracts, grants, and loans to corporations that outsource jobs, we need to support the small businesses that are creating good jobs in America. We must also expand “Buy American,” “Buy Local,” and other government policies that will increase jobs in the U.S. We need to make sure that strong and binding labor, environmental, and human rights standards are written into the core text of all trade agreements. We must also add to the core text of every U.S. trade agreement, enforceable rules against currency cheating, which allows countries to unfairly dump their products in this country and makes our exports more expensive abroad. Our trade policies must support communities of color that have been impacted the worst by our unfair trade deals. Undo the harm that trade agreements have done to family farmers. We must eliminate rules in our trade deals that increase the cost of medicines.",

        "economy" : "While the Bill of Rights protects us from the tyranny of an oppressive government, many in the establishment would like the American people to submit to the tyranny of oligarchs, multinational corporations, Wall Street banks, and billionaires who now control almost every aspect of our daily lives. But as President Franklin Roosevelt said 75 years ago: “True individual freedom cannot exist without economic security. 21st Century Economic Bill of Rights with the following guarantees: \"The right to a job that pays a living wage. The right to quality health care. The right to a complete education. The right to affordable housing. The right to a clean environment. The right to a secure retirement.\" Real Wall Street Reform: \"Break up too-big-to-fail banks. End the too-big-to-jail doctrine. Reinstate the Glass-Steagall Act. Cap credit card interest rates. Allow every post office to offer basic and affordable banking services. Cap ATM fees. Audit the Federal Reserve and make it a more democratic institution so that it becomes responsive to the needs of ordinary Americans, not just the billionaires on Wall Street. Restrict rapid-fire financial speculation with a financial transactions tax. Reform credit rating agencies.",

        "education" : "supports increasing funding for public education and opposes for-profit charter schools. We must make sure that charter schools are accountable, transparent and truly serve the needs of disadvantaged children, not Wall Street, billionaire investors, and other private interests. We must ensure that a handful of billionaires don’t determine education policy for our nation’s children. We will oppose the DeVos-style privatization of our nation’s schools and will not allow public resources to be drained from public schools. We must guarantee childcare and universal pre-Kindergarten for every child in America to help level the playing field, create new and good jobs, and enable parents more easily balance the demands of work and home. We must increase pay for public school teachers so that their salary is commensurate with their importance to society. And we must invest in high-quality, ongoing professional development, and cancel teachers’ student debt. We must protect the tenure system for public school teachers and combat attacks on collective bargaining by corporate profiteers. We must put an end to high-stakes testing and 'teaching to the test' so that our students have a more fulfilling educational life and our teachers are afforded professional respect. We must guarantee children with disabilities an equal right to high-quality education, and increase funding for programs that combat racial segregation and unfair disciplinary practices that disproportionately affect students of color.",

        "gun regulation" : "supports expanding background checks, banning the sale of certain firearms, and prohibiting high-capacity ammunition magazines. We must: Take on the NRA and its corrupting effect on Washington. The NRA has become a partisan lobbying public-relations entity for gun manufacturers, and its influence must be stopped. Expand background checks. End the gun show loophole. All gun purchases should be subject to the same background check standards. Ban the sale and distribution of assault weapons. Assault weapons are designed and sold as tools of war. There is absolutely no reason why these firearms should be sold to civilians. Prohibit high-capacity ammunition magazines. Crack down on 'straw purchases' where people buy guns for criminals.",

        "criminal justice" : "We are going to end the international embarrassment of having more people in jail than any other country on earth. Instead of spending $80 billion a year on jails and incarceration, we are going to invest in jobs and education for our young people. No more private prisons and detention centers. No more profiteering from locking people up. No more 'war on drugs.' No more keeping people in jail because they’re too poor to afford cash bail. End Profiteering in Our Criminal Justice System. End Cash Bail. Transform the Way We Police Communities. Ensure Law Enforcement Accountability and Robust Oversight. Provide More Support to Police Officers and Create A Robust Non-Law Enforcement Alternative Response System. Ensuring All Americans Due Process. Right to counsel. Ensure Accountability and Fairness in Prosecution. Ending Mass Incarceration and Excessive Sentencing. End the War on Drugs and Stop Criminalizing Addiction. Treat Children Like Children. Reform Our Decrepit Prison System to Make Jails and Prisons More Humane. Ensure a Just Transition Post-Release. Stop The Cycle of Violence by Prioritizing the Most Serious Offenses. Provide Adequate Support to Crime Survivors. Reverse the Criminalization of Disability. Investing in Community Living. Investing in Our Communities.",

        "foreign policy" : "The U.S. must lead the world in improving international cooperation in the fight against climate change, militarism, authoritarianism, and global inequality. Implement a foreign policy which focuses on democracy, human rights, diplomacy and peace, and economic fairness. Allow Congress to reassert its Constitutional role in warmaking, so that no president can wage unauthorized and unconstitutional interventions overseas. Follow the American people, who do not want endless war. American troops have been in Afghanistan for nearly 18 years, the longest war in American history. Our troops have been in Iraq since 2003, and in Syria since 2015, and many other places. It is long past time for Congress to reassert its Constitutional authority over the use of force to responsibly end these interventions and bring our troops home. End U.S. support for the Saudi-led intervention in Yemen, which has created the world’s worst humanitarian catastrophe. Rejoin the Iran nuclear agreement and talk to Iran on a range of other issues. Work with pro-democracy forces around the world to build societies that work for and protect all people. In the United States, Europe, and elsewhere, democracy is under threat by forces of intolerance, corruption, and authoritarianism.",

        "impeachment" : "Three months ago, I called for an impeachment inquiry by the Judiciary Committee of the U.S. House of Representatives into the actions and behavior of President Trump. I believed then and I believe now that in Donald Trump we have the most corrupt president in the modern history of this country.",

        "source" : "https://berniesanders.com/",

        "page" : "sanders.html",

        "bio" : "Sanders was born in 1941 in Brooklyn, New York, where he grew up. He earned his B.A. in political science from the University of Chicago in 1964 and went on to lecture at Harvard University and Hamilton College in New York. Sanders has also worked as a carpenter and a journalist. After spending six months in a kibbutz (a communal settlement) in Israel, Sanders moved to Vermont in 1968. In the 1970s, he ran unsuccessfully for governor of Vermont twice and for U.S. Senate twice as a Liberty Union Party candidate. He was elected mayor of Burlington as an independent in 1981, defeating Democratic incumbent Gordon Paquette by a margin of 10 votes, and he served as mayor until 1989. During his mayoral tenure, Sanders ran unsuccessful bids for governor and U.S. House as an independent before being elected to the House in 1990. He served in the House until 2007, when he became a member of the U.S. Senate following his election to the chamber the previous year. Sanders sought the Democratic nomination for president in 2016, which he lost to former Secretary of State Hillary Clinton. He received around 43 percent of the popular vote in the primaries compared to Clinton's 55 percent, and he received support from 39 percent of delegates at the national convention to Clinton's 60 percent. Though Sanders has held elected office as an independent since 1981 and sought the Democratic nomination for president, he identifies as a democratic socialist.",

        "name" : "Bernie Sanders",

        "party" : "D",

        "status" : false,

        "image" : "sanders.jpg",

        "answers" : {
            "Immigration" : [false, true, true],
            "Healthcare" : [true, true, true],
            "Energy and Environmental Issues" : [true, true, false],
            "Trade" : [true],
            "Economy" : [true, true, true, true, false],
            "Education" : [true, true, true, false],
            "Gun Regulation" : [false, false, false, true],
            "Criminal Justice" : [true, false, true, true, true, false],
            "Foreign Policy" : [true, true, false, false, false, false, false],
            "Domestic Policy" : [true, false, false, true, true, true]
        }
    },
    "gabbard" : {
        "immigration" : "We need comprehensive immigration reform to address our broken immigration laws and we need to have a serious conversation about the most effective and humane ways to compassionately secure our borders while building bridges and cooperative foreign policy with other countries. We need to ensure we have a clear, enforceable, accessible, and humane pathway to citizenship. Most urgently, we must pass DACA to ensure children who know no other home are allowed to remain in the US and take steps to ensure children are not separated from their parents. We must fund and equip agencies in charge of processing asylum claim and protect migrants, many of whom are women and children, who are going through our asylum process and fleeing natural disasters, religious persecution, or violence under an asylum status.",

        "healthcare" : "We need real healthcare reform that brings down costs, increases access to quality care, and ensures basic health services are available to all Americans. As a cosponsor of H.R.676, the Expanded & Improved Medicare for All Act, Tulsi Gabbard is working towards a system that will provide universal healthcare to all Americans—a standard met by nearly every other major industrialized country in the world. We need a system that puts people first, ahead of the profits of insurance and pharmaceutical companies. The Medicare for All Act is an important step forward.",

        "energy and environmental issues" : "As president, I’ll tackle climate change by ending subsidies to big fossil fuel and agribusiness corporations, ban offshore drilling, harness innovation to create jobs in renewable energy, provide better opportunities for our farmers, and ensure every American has clean air and water. We need to invest in 100% renewable and safe energy sources like wind, solar, and geothermal. I also support a ban on fracking, ending the $26 billion/year in fossil fuel subsidies, as well as all subsidies or waivers to the nuclear power industry, which should itself be completely responsible for paying for its own insurance and paying the long term cost for safe storage of nuclear waste over centuries. I will also work to provide other incentives for a renewable energy economy.",

        "trade" : "Trump’s trade wars are a disaster. Billions in bailouts to farmers. Unstable markets for small businesses. We need trade policies that put the people first.",

        "economy" : "From the Great Depression through the turn of the 21st Century, Glass-Steagall helped keep our economy safe. Repealing it allowed too-big-to-fail banks to gamble with the savings and livelihoods of the American people, with devastating, irrevocable consequences. Hawai?i, along with communities across the country, paid the price in 2008 with the worst financial crisis since the Great Depression. Today, the banks that were 'too big to fail' in 2008 are even bigger and more powerful now. We must reinstate Glass-Steagall and create a financial system that works for every American—not just Wall Street bank.",

        "education" : "We need to make sure we are investing in the future of all of our children. In order to invest in our future, we have to provide adequate resources and meaningful accountability to ensure that all our students have equal access to quality education. The cost of tuition keeps too many people from pursuing a college education. We need to resolve student debt and guarantee college for all. From Trump University to Betsy DeVos, members of this administration have put a higher premium on personal enrichment than they have on improving our education.",

        "gun regulation" : "The time for action is now. We cannot allow partisan politics to get in the way of taking meaningful action in areas where both parties agree and that have the support of most Americans across this country. Here are a few examples: Both Democrats and Republicans support legislation I have co-sponsored to ban bump stocks. Both Democrats and Republicans support legislation to uphold Second Amendment rights and strengthen the National Instant Criminal Background Check System. Now is the time for us to come together and to take meaningful action towards responsible, common sense gun safety reform.",

        "criminal justice" : "Criminal justice reform is a bipartisan issue. We can bring down costs and improve outcomes by implementing alternatives to incarceration. Our outdated policies on marijuana are turning everyday Americans into criminals, tearing apart families, and wasting huge amounts of taxpayer dollars to arrest, prosecute, and incarcerate people for non-violent marijuana charges. We must stand up against for-profit, private prisons and a criminal justice system that favors the rich and powerful and punishes the poor, locking up people who smoke marijuana and ignoring corps like Purdue Pharma responsible for thousands of opioid-related deaths. As president I’ll end the failed war on drugs, legalize marijuana, end cash bail, and ban private prisons and bring about real criminal justice reform.",

        "foriegn policy" : "As president, I will lead this country to bring about a bold change in our foreign policy that bends the arc of history away from war and towards peace. That stops wasting our resources, and our lives on regime change wars, and redirects our focus and energy towards peace and prosperity for all people. The time is now to give up the gunboat diplomacy of the past, and instead, work out our differences with communication, negotiations, and goodwill.",

        "impeachment" : "Up to this point, I have been opposed to pursuing impeachment because it will further divide our already badly divided country. However, after looking carefully at the transcript of the conversation with Ukraine’s President, the whistleblower complaint, the Inspector General memo, and President Trump’s comments about the issue, unfortunately, I believe that if we do not proceed with the inquiry, it will set a very dangerous precedent.",

        "source" : "https://www.tulsi2020.com/",

        "page" : "gabbard.html",

        "bio" : "Gabbard was born in 1981 and grew up in Hawaii. In 2002, when she won election to the state House of Representatives at the age of 21, she was the youngest person elected to public office in the state's history. She served in the House until 2004. Since 2003, Gabbard has been a member of the Hawaii Army National Guard. She has been deployed on two tours of duty in the Middle East. Starting in 2005, she served as a field medical unit specialist in Iraq. During her second tour, she led security missions and helped train the Kuwait National Guard. Between the two tours, Gabbard graduated from the Accelerated Officer Candidate School at the Alabama Military Academy and received a B.S. in business administration from Hawaii Pacific University. She also worked as a legislative aide to Sen. Daniel Akaka (D-Hawaii). Gabbard was elected to the Honolulu City Council in 2010. She served on the council until 2012, when she ran for and won a seat in the U.S. House. Gabbard was the first Hindu elected to Congress. In 2013, Gabbard was elected vice chair of the Democratic National Committee.[8] She resigned in February 2016 to endorse Sen. Bernie Sanders in the Democratic presidential primary.",

        "name" : "Tulsi Gubbard",

        "party" : "D",

        "status" : false,

        "image" : "gabbard.png",

        "answers" : {
            "Immigration" : [true, false, false],
            "Healthcare" : [true, true, true],
            "Energy and Environmental Issues" : [true, true, false],
            "Trade" : [true],
            "Economy" : [true, false, false, true, false],
            "Education" : [true, true, true, true],
            "Gun Regulation" : [false, true, false, true],
            "Criminal Justice" : [false, false, true, true, true, false],
            "Foreign Policy" : [false, true, false, false, true, false, false],
            "Domestic Policy" : [false, false, false, true, true, true]
        }
    },
    "trump" : {
        "immigration" : "enforced immigration laws to protect American communities and American jobs. protects American communities and restores law and order so Americans can feel safe in their communities. President Trump called on Congress to fully fund a wall along the Southern border, to close legal loopholes that enable illegal immigration, to end chain migration, and to eliminate the visa lottery program. From President Trump’s inauguration through the end of FY 2017, U.S. Immigration and Customs Enforcement (ICE) made 110,568 arrests of illegal aliens, a 40 percent increase compared to the same time period the prior year. The number of counties participating in the 287(g) program, which gives state and local law enforcement entities delegated authority by ICE to enforce immigration in their jurisdiction, has doubled.",

        "healthcare" : "providing Americans the healthcare they need and improving access to affordable, quality healthcare. The Department of Agriculture provided more than $1 billion in fiscal year 2017 to be used to improve access to health care services for 2.5 million people in rural communities. President Trump mobilized his entire Administration to address drug addiction and opioid abuse by directing the declaration of a Nationwide Public Health Emergency. President Trump signed an Executive order to reform the United States healthcare system to take the first steps to expand choices and alternatives to Obamacare plans and increase competition to bring down costs for consumers. Under President Trump, The FDA has approved the most number of generic drugs in history in order to increase competition in the marketplace and lower the cost of prescription drugs for all Americans.",

        "energy and environmental issues" : "reversing years of policies that locked-up American energy and restricted our ability to sell to other countries. Following the principles established by the President’s Executive Order on Energy Independence, EPA has proposed the repeal of the 'Clean Power Plan.' EPA Administrator Pruitt launched a task force to provide recommendations on how to streamline and improve the Superfund program, which is responsible for cleaning up land contaminated by hazardous waste. EPA has re-launched launched the Smart Sectors Program to partner with the private sector to achieve better environmental outcomes. signed an Executive Order to expand offshore oil and gas drilling and open more leases to develop offshore drilling. President Trump directed the Environmental Protection Agency (EPA) to rescind the Obama Administration’s Clean Power Plan (CPP). The Administration estimates that repealing the Clean Power Plan could eliminate up to $33 billion in compliance costs in 2030. In May 2017, EPA Administrator Pruitt announced the creation of a Superfund task force to look at ways to streamline and improve the Superfund program.",

        "trade" : "advanced free, fair and reciprocal trade deals that protect American workers, ending decades of destructive trade policies. withdraw the United States from the Trans-Pacific Partnership, advancing his agenda to protect American workers. Since taking office, President Trump has sought to confront unfair trade practices that have harmed American commerce for far too long. The Trump Administration successfully litigated WTO disputes targeting unfair trade practices and protected our right to enact fair trade laws.",

        "economy" : "put the American economy into high gear, which created jobs and increased wealth. passed historic tax cuts and relief for hard-working Americans. The U.S. Gross Domestic Product (GDP) grew at or above 3 percent for two quarters in a row for the first time in three years. During first year, nearly 3 million new jobs were created since January 2017 and the unemployment rate fell to 3.8 percent, the first time below 4% in 18 years. The Dow Jones Industrial Average hit record highs more than 80 times, including closing higher than 26,000 points for the first time in its history. Economic confidence rebounded to record highs because his pro-growth policies have and continue to put American workers and businesses first.",

        "education" : "supported expanding school choice across the country so parents have a voice in their children’s education. President Trump and his Administration have identified and begun to end harmful regulations while maintaining protections for students. The Department of Education has overseen the first year of the Every Student Succeeds Act (ESSA) to empower States with the flexibility they need to educate their students. President Trump and his Administration are taking steps to reform the student aid process. The Department of Education is working to ensure regulations on the books adequately protect students while giving States, institutions, teachers, parents and students the flexibility they need to improve outcomes.",

        "gun regulation" : "Prosecutors were directed by the Department of Justice to focus on taking illegal guns off our streets. Criminals charged with unlawful possession of a firearm has increased 23 percent.",

        "criminal justice" : "Department of Justice are working with local law enforcement to protect American communities. protecting the rights of all Americans. Department of Justice have aggressively confronted organized crime from street gangs to criminal cartels. signed Executive Order 13809 to restore State and local law enforcement’s access to surplus equipment from the Defense Department, such as armored vehicles. Attorney General Sessions returned to longstanding Department of Justice charging policy for our Federal prosecutors, trusting them once again and directing them to return to charging the most serious, readily provable offense. Under President Trump, the Department of Justice has supported students whose free-speech rights have been under attack on university campuses. Attorney General Sessions designated MS-13 as a priority for the Organized Crime Drug Enforcement Task Force, to allow Federal law enforcement to utilize an expanded toolkit in its efforts to dismantle the organization.",

        "foreign policy" : "put America first in trade so American workers aren’t put at a disadvantage. used an America First foreign policy to restore respect for the United States throughout the world and to advance our interests. made historic trips and delivered speeches abroad restoring America’s influence around the world. rebuilding our military, defeating terrorist organizations, and confronting rogue nations to protect America and our allies. additional measures to punish those who seek to undermine American democracy and security. traveled to the Middle East and Europe to solidify relations with our allies in both regions and to push for greater commitments and cooperation. putting maximum pressure on North Korea to denuclearize. President Trump is confronting Iran’s aggression.",

        "impeachment" : "And the witch hunt continues, but they’re getting hit hard in this witch hunt, because when they look at the information, it’s a joke. Impeachment? For that? When you have a wonderful meeting, or you have a wonderful phone conversation?",

        "source" : "https://www.promiseskept.com/",

        "page" : "trump.html",

        "bio" : "Trump was born in Queens, New York, in 1946. He attended Fordham University before transferring to the Wharton School of Finance at the University of Pennsylvania, where he earned a B.S. in economics in 1968. After graduation, Trump joined his family's company, Elizabeth Trump & Son. He took control of the company in 1971 and later renamed it the Trump Organization. He was involved in a variety of real estate and other business ventures in the following years. From 2004 until 2015, Trump hosted and served as executive producer of The Apprentice on NBC. In 1999, Trump ran as a Reform Party presidential candidate; he withdrew from the race in February 2000. Between 1987 and 2012, he changed his official party affiliation five times, registering most recently as a Republican in April 2012. Trump declared his candidacy for the 2016 presidential election on June 16, 2015, and officially received the nomination of the Republican Party on July 19, 2016, at the Republican National Convention. On November 8, 2016, Trump was elected the 45th president of the United States. He received 304 electoral votes to Hillary Clinton's 227.",

        "name" : "Donald Trump",

        "party" : "R",

        "status" : true,

        "image" : "trump.png",

        "answers" : {
            "Immigration" : [true, false, false],
            "Healthcare" : [false, false, false],
            "Energy and Environmental Issues" : [false, false, true],
            "Trade" : [false],
            "Economy" : [true, false, false, false, true],
            "Education" : [false, false, false, true],
            "Gun Regulation" : [false, false, false, true],
            "Criminal Justice" : [false, true, false, false, false, false],
            "Foreign Policy" : [false, false, true, false, true, true, true],
            "Domestic Policy" : [false, true, true, false, true, false]
        }
    },
    "fuente" : {
        "immigration" : "We need comprehensive immigration reform that recognizes undocumented workers to be assets rather than liabilities. It isn’t logical to suggest that we can deport 13 million immigrants any more than it’s logical to suggest that we cannot deport the small percentage who have committed felonies. We can secure our borders without abandoning the values upon which our nation was built. The first step is to admit that our current system of immigrations is broken. Then, we must create a more intelligent, effective and efficient way of welcoming immigrants to our borders and providing them with a clear path to citizenship. The vast majority of these people are simply trying to secure a better future for themselves and for their families. While they may be entering the United States in a way that conflicts with our existing laws, they aren’t entering our country to be disruptive, and they may not even understand what our laws require. I think we need to start from a different place. Rather than viewing immigrants as potential liabilities, we need to begin to view them as assets. If we did that, the necessary changes to our archaic immigration laws could begin to be intelligently discussed, and we could make progress toward the comprehensive immigration reform that almost everyone agrees needs to happen. Today, we vilify immigrants on a generic basis. We also selectively enforce the laws that are on the books, which allows us to ignore how incomprehensively out-of-date those laws are. Our approach is almost anti-American when you compare it to the values that have always defined our country. We need to de-po-liticize the issue and work toward effective and comprehensive immigration reform.",

        "healthcare" : "We must focus on the three original goals of health care reform – lower cost, maintained or improved quality, and open access. The ACA ultimately only focused upon the access issue because of the political capital it carries with it. However, if you don’t address cost and quality, you will have provided access to a systemically poor approach. We must readdress health care reform in a way that addresses cost and quality along with access. For example, substantive tort reform needs to be included in the discussion because of the way it distorts costs. Pharmaceutical advertising should also be on the table since it disproportionately adds cost without improving quality. Catastrophic insurance coverage would probably be the best starting, point to begin the reassessment. Then we could upon that to ensure operational efficiency while minimizing the potential for abuse. There isn’t any reason cannot deliver quality healthcare to every American.",

        "energy and envronmental issues" : "We need to orchestrate an intelligent approach to address our energy and environmental issues. They need to be considered together rather than discussed as if they were independent of one another. We are stewards of our planet, and we bear the responsibility to preserve the environment to the degree that we reasonably can. We cannot ignore science but we musts recognize that it is a two-edged sword. While we cannot deny mankind’s contribution to climate change, we also have to acknowledge that our attempts to mitigate the damage we do is driven by., We should extricate ourselves from the failed exercise of nation-building – trying to impose democracy on countries that may not choose to embrace it or may not be ready to build upon it from a cultural perspective. L would like to see us be less active in that regard as it often leads to us being Viewed negatively among other countries. We also have a duty to protect our citizens. If we are attacked or there is a clear and present danger of such an attack, then we have every right to defend our-selves.",

        "trade" : null,

        "economy" : "The government cannot create jobs, but it can influence the economic environment. We need to rebalance the relationship between regulation, taxation, and economic expansion so that the private sector can create new jobs and attract old ones that have migrated overseas. This will expand the tax base as well as the economy and allow us to begin working down the debt that will otherwise suffocate our country in years to come. It will also provide individuals with the opportunity to pursue upward to mobility, which has been “missing in action” for far too many years. I would like to create an environment that actually support the concept of equal opportunity as opposed to just playing lip service to it. I would also like to see us find a way to finance education for those who need such assistance. We have created economic barriers in our upper educational system that make it cost prohibitive for some individuals to pursue their dreams. This discourages those individuals and also prevents our country from enjoying the full range of talent these individuals have to offer. We should also eliminate the incredible amount of waste and inefficiency in our recent military budgets. There is a disgraceful relationship between our politicians and the military-industrial lobby.",

        "education" : "Given some at the radical excesses in which our government currently indulges, we should be able to intelligently find a way to fund college and trade school education to allow everyone to have access to those resources. I would favor constructing a free education system, but we would need to identify the funding mechanisms before launching such a program. The reality is that different people express their creativity in different ways and tan contribute to society in different mariners. Having treated thousands of jobs across the United States over the years, I can assure you that not everyone needs a college education nor do some people with a college education have the prerequisite skills to effectively provide some of the vital labor talent that our Nation also needs. It has become fashionable to leave skilled labor out of the discussion. I have too much respect for its contribution to ignore it.",

        "gun regulation" : "To be dear, barring a constitutional Amendment, I support the right to bear arms under the Second Amendment However, reasonable regulations that 'provide for… the general Welfare of the United States' are also part of our constitutional mandate. I support reasonable gun control legislation that pro-vides a greater level at safety for the general public without violating the fundamental right to bear arms (i.e., legislation that is limited to enhanced registration, training, logical weapons limitation by properly deﬁned type, etc.).",

        "criminal justice" : null,

        "foreign policy" : "Simply do not think we should champion the political rhetoric that most politicians choose to pursue that suggests that we should use forte to intervene in the events of other nations if their cultures differ from ours and we see an opportunity to impose our will. Our government‘s authority to “provide for the common defense” is fundamental. Lf the threat to the United States is immediate or impending (as in the case of “confirmed” terrorists), we have the authority to address it. It the threat is hypothetical, then we must exercise well-measured restraint. Just as our country had to suffer through a civil war to address the pain associated. With fundamental change, we must allow other countries to find their political equilibrium without always assuming it must reflect ours.",

        "impeachment" : null,

        "other" : "Regarding veterans, the Department of Veterans Affairs is broken. Some of our veterans are dying as they wait for care; others receive interior treatment when they receive it. Yet, VA officials think it is appropriate to compare the “inconvenience” to “waiting in line at Disney World.” it is a travesty that needs to be addressed immediately. Our Social Security system is broken and needs to be fixed immediately. There is only one solution: raise the retirement age and raise the contributions cap",

        "source" : "https://rocky101.com/",

        "page" : "fuente.html",

        "bio" : "De La Fuente was born in San Diego, California, in 1954. He studied physics and mathematics at Instituto Patria and business administration and accounting at Anáhuac University and the University of San Diego. After his studies, De La Fuente entered the car dealers industry, beginning as a salesman and eventually acquiring 28 car franchises in California. He then transitioned to the financial industry and real estate development, opening 11 currency exchanges, three banks, and assisted living facilities in Los Angeles and Lemon Grove. De La Fuente also owns properties throughout California, Connecticut, Florida, Massachusetts, New York, Ohio, Texas, and Virginia.[5] He served as an at-large delegate for California at the Democratic National Convention in 1992. De La Fuente has five children.",

        "name" : "Roque De La Fuente",

        "party" : "R",

        "status" : false,

        "image" : "fuente.jpg",

        "answers" : {
            "Immigration" : [false, true, true],
            "Healthcare" : [true, true, true],
            "Energy and Environmental Issues" : [true, true, false],
            "Trade" : [true],
            "Economy" : [true, false, false, true],
            "Education" : [true, true, true, true],
            "Gun Regulation" : [false, false, false, false],
            "Criminal Justice" : [true, false, false, true, true, true],
            "Foreign Policy" : [true, true, true, false, true, false, false],
            "Domestic Policy" : [false, false, false, false, true, true]
        }
    },
    "weld" : {
        "immigration" : "When it comes to immigration, we should adopt a robust guest worker program, to assist our agricultural and construction industries, particularly in the western states. We don’t need a path to citizenship for eleven million people, but we do need more and longer work visas. Under the current regime, we’re simply educating our competition in our graduate schools, and then sending them home to China and other economic competitors of the U.S. We may not need a long impenetrable wall, but we do need short-term bridges.",

        "healthcare" : "As to health care, instead of arguing endlessly and fruitlessly about whether the Affordable Care Act should be repealed – because let’s face it, we do not have a consensus in Congress – there are various commonsense health care issues that could be addressed immediately, across party lines. Consumers should be permitted to establish personal health care savings accounts, and to choose their health care provider. They should be free to purchase pharmaceutical drugs across state lines and also in other countries. Their choice, not the government’s.",

        "energy and environmental issues" : "Whether as protection of a fragile ecosystem or as stewardship of God’s creation, there is a pressing need to act on climate change. The United States must rejoin the Paris climate accords, and adopt targets consonant with those of other industrialized nations. We must protect our economy, yes, but we must also recognize that increased natural disasters and unfamiliar weather patterns threaten to strip the snow from our White Mountains, and to melt all the mountain glaciers worldwide upon which hundreds of millions of people depend for their only source of water. Europe has its cathedrals and monuments; we have our mountains, canyons, valleys, rivers and streams – and we had damn well better take care of them. Our borders are safe in New Hampshire, but it is not a stretch to say that if climate change is not addressed, our coastlines and those of all other countries will over time be obliterated by storm surge and the melting of the polar ice cap. Yet climate skeptics claim that they are conservative!",

        "trade" : "On the international front, the United States should return to a regime of free trade rather than having constant recourse to tariffs. Mr. Smoot and Mr. Hawley tried tariffs in June, 1930, and fanned the flames of the Great Depression.",

        "economy" : "In the federal budget, the two most important tasks are to cut spending and to cut taxes – and spending comes first. We need to “zero base” the federal budget, basing each appropriation on outcomes actually achieved, not on last year’s appropriation plus 5 per cent, which is what too many folks in Washington use as a starting point. Right after cutting spending comes cutting taxes. Federal taxes need serious adjustment downward. I favor repealing the federal death tax, for example, and cutting the capital gains tax rate to 10%. These taxes are not major revenue raisers, and they both have the perverse effect of penalizing people for a lifetime of hard work. Eliminating them will increase our aggregate national wealth, which should always be a key priority of the United States government. Domestically, our most immediate priority must be jobs and wages. What are we going to do about the fact that 25% of all the jobs in the United States today won’t exist in 15 years? This is not caused by the unseen hands of globalization or the internet, but rather by the soon to be all-too-visible hands of robotics, drones, machine learning, artificial intelligence, and autonomous vehicles. The old jobs will be replaced by new and different jobs, but the problem is that today’s workers don’t yet possess the skill sets that the replacement jobs will require. This truly is a national emergency, and it’s going to require a nationwide response.",

        "education" : "A system for delivering new skill sets is not the only area of education that cries out for action in the future. Parents need more options regarding the education of their children. We need to support school choice. We need to support home schooling. We need to support charter schools. And we need to consider abolishing the U. S. Department of Education, transferring decision-making authority to the States and the parents of school-age and college-age children.",

        "gun regulation" : "not to have a supercharged background check on everybody everytime they buy a gun because I do not think that is where you reach the shooters. I think the red flag laws ... would be a giant step toward preventing the mass shootings that we are talking about.",

        "criminal justice" : "Addiction of all types should be treated as the national public health emergency that it is, rather than as a crime of status and a top priority for the US criminal justice system. We should also move on to bail reform, funding for reentry programs, and other criminal justice reforms not reached by the recent First Step legislation.",

        "foreign policy" : "In fairness to young adults in the military, they should not be asked to risk their lives in order to engineer regime changes in foreign countries at the whim of the US government, in the absence of any substantial threat to the United States. I would include issues like free trade and a robust engagement in foreign policy and robust use of soft power and diplomacy. Mr. Trump doesn’t do any of that because he thinks he’s the only person that knows anything. He has no use for soft power or diplomacy or, indeed, planning ahead. He likes to have a summit on no notice and with no preparation. There’s a reason why over the years, people thought that successful diplomacy required careful preparation and debriefing of the people who are going to conduct the negotiation.",

        "impeachment" : "The Mueller report section on obstruction of justice made it clear that Mr. Trump has ordered people to falsify documents in order to obstruct an investigation. And this is not nobody. This is the director of national intelligence and senior national security officials and his own lawyer.",

        "source" : "https://weld2020.org/",

        "page" : "weld.html",

        "bio" : "Weld was born in 1945 and grew up in Long Island. He received a bachelor's degree in classics from Harvard College, graduating summa cum laude. He then received a diploma in international economics from Oxford University before returning to Harvard to attend law school, where he received a J.D. Weld clerked for a year at the Massachusetts Supreme Judicial Court before entering private practice at the law firm Hill & Barlow in Boston. In 1981, he was appointed U.S. attorney for Massachusetts under Republican President Ronald Reagan. He served until 1986, when he assumed the position of assistant U.S. attorney general at the Department of Justice's criminal division. He left the Department of Justice in 1987. Weld was elected governor of Massachusetts in 1990, becoming the first Republican to win a gubernatorial election in the state in 20 years. Weld beat Democratic candidate John Silber by 4 points. In 1994, he was re-elected with 71 percent of the vote.Weld ran unsuccessfully for the U.S. Senate in 1996. He resigned as governor in 1997 to pursue a nomination by President Bill Clinton (D) as the U.S. ambassador to Mexico, a position to which he was not confirmed. He then re-entered private practice in New York. Weld ran unsuccessfully for governor of New York in 2006. He withdrew from the Republican primary after the party endorsed John Faso (R) and ran instead as a Libertarian, receiving 2 percent of the vote in the general election. Weld ran for vice president of the United States in 2016 on the Libertarian ticket with Gary Johnson as the presidential candidate.",

        "name" : "Bill Weld",

        "party" : "R",

        "status" : false,

        "image" : "weld.jpg",

        "answers" : {
            "Immigration" : [false, false, false],
            "Healthcare" : [false, false, false],
            "Energy and Environmental Issues" : [false, false, true],
            "Trade" : [true],
            "Economy" : [false, false, false, false, true],
            "Education" : [false, true, false, true],
            "Gun Regulation" : [false, false, false, false],
            "Criminal Justice" : [true, false, true, true, true, false],
            "Foreign Policy" : [false, true, false, false, true, true, false],
            "Domestic Policy" : [true, false, false, false, false, true]
        }
    }
}

$(document).ready( () => {

var policies = Object.keys(candidates[Object.keys(candidates)[0]].answers);
var matrix = {};
var answers = [];
var grid = true;
var status = null;

policies.forEach( p => {
  let answer = JSON.parse(window.localStorage.getItem(p));
  let key = Object.keys(answer)[0];
  answer = typeof answer[key] == 'string' ? answer[key] == 1 ? true : false : false;
  Object.entries(candidates).forEach( (c,i) =>{
    matrix[c[0]] = !matrix[c[0]] ? 0 : matrix[c[0]];
    matrix[c[0]] +=  answer == c[1].answers[p][key] ? 1 : 0
  });
  //user_answers.push(typeof answer[key] == 'string' ? {[key]: answer[key] == 1 ? true : false} : {[key]: false});
});

matrix = Object.entries(matrix);

const display = (matrix) => {
  $('#candidates').html(null);
  matrix.forEach( c => {
    $('#candidates').append(`
      <div class="w3-card-4 w3-round ${grid ? 'grid' : null}" style="width:25%; margin: 20px auto;">
      <a style="text-decoration:none;" href="${candidates[c[0]]['page']}">
      <img src="images/${candidates[c[0]]['image']}" alt="${c[0]}" style="width:100%"></a>
      <div class="w3-container w3-center">
        <p>${candidates[c[0]]['name']} / (${candidates[c[0]]['party']})</p>
        <p>Match: <span class="w3-badge w3-yellow">${c[1]*10}%</span></p>
        <p>Status: ${candidates[c[0]].status ? 'Running' : 'Withdrew'}</p>
      </div>
    </div>`)});
}

const order = (matrix) => {
  display(matrix.sort( (a,b) => b[1]-a[1] ));
}

order(matrix);


$('input[type=checkbox]:nth-of-type(2)').change(()=> {
  $('#candidates div[class^="w3-card-4"]').each( (i,e)=> $(e).toggleClass('grid') );
  grid = !grid;
});

$('input[type=checkbox]:nth-of-type(3)').change(()=>{
  status = !status ? matrix.filter( c => candidates[c[0]].status ) : null;
  display(status || matrix);
})

$('input[type=text]').keyup( (e)=> {

  status ? e.target.value.length > 0 ? display(status.filter( (c) => candidates[c[0]].name.toUpperCase().includes(e.target.value.toUpperCase()) )) : order(status) :
  e.target.value.length > 0 ? display(matrix.filter( (c) => candidates[c[0]].name.toUpperCase().includes(e.target.value.toUpperCase()) )) : order(matrix);
})


});
