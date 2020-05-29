
$('document').ready( ()=> {

  var questions = {
    'Register' : null,
    'Criminal Justice' : [
      ["Should convicted criminals have the right to vote?","In April 2016, Virginia Governor Terry McAuliffe issued an executive order which restored voting rights to more than 200,000 convicted felons living in the state. The order overturned the state’s practice of felony disenfranchisement, which excludes people from voting who have been convicted of a criminal defense. The 14th amendment of the United States prohibits citizens from voting who have participated in a “rebellion, or other crime” but allows states to determine which crimes qualify for voter disenfranchisement. In the U.S. approximately 5.8 million people are ineligible to vote due to voter disenfranchisement and only two states, Maine and Vermont, have no restrictions on allowing felons to vote. Opponents of felon voting rights argue that a citizen forfeits their rights to vote when they are convicted of a felony. Proponents argue that the arcane law disenfranchises millions of Americans from participating in democracy and has an adverse affect on poor communities."],
      ["Should drug traffickers receive the death penalty?","In March 2018, President Trump asked the Justice department to seek more death-penalty cases against drug traffickers. Trump announced the proposal as part of a plan to combat the opioid epidemic which is claiming the lives of more than 100 people a day in the U.S. In 1988 the federal government passed a drug law which imposed the death penalty on drug “kingpins” who commit murder in the course of their business. Analysts estimate that this law has resulted in only a few executions. 32 countries impose the death penalty for drug smuggling. Seven of these countries (China, Indonesia, Iran, Saudi Arabia, Vietnam, Malaysia and Singapore) routinely execute drug offenders. Asia and the Middle East’s tough approach contrasts with many Western countries who have legalized cannabis in recent years (selling cannabis in Saudi Arabia is punished by beheading)."],
      ["Should police officers be required to wear body cameras?","In the wake of the lethal shooting of Michael Brown by a police officer in Ferguson, Missouri a petition has been launched to have the White House look into requiring all police officers in the country to wear body cameras. The petition has now exceeded 128,000 signatures, the Obama Administration said it will respond to petitions that exceed 100,000."],
      ["Should non-violent prisoners be released from jail in order to reduce overcrowding?", "None."],
      ["Are you in favor of decriminalizing drug use?","In 1970, Congress passed the Controlled Substances Act which banned the manufacture, importation, possession, use and distribution of certain drugs. The act ranked drugs by their potential for abuse and placed them into five categories. Two of the most widely used drugs in the U.S., wine and alcohol, are exempt from the classifications. Ballot measures in several states including Colorado, Washington and Oregon have decriminalized possession of small amounts of marijuana. These laws apply only within the respective states and have no effect on Federal law.","Do you support affirmative action programs?"],
      ["Do you support mandatory minimum prison sentences for people charged with drug possession?","Mandatory minimum sentences are automatic, minimum prison terms set by Congress. Judges in the U.S. are required to base their sentences on the Federal Sentencing Guidelines, mandatory minimum sentencing laws, or both. In 1986 the U.S. Congress passed the Anti-Drug Abuse Act which enacted new mandatory minimum sentences for drugs. People caught with 5 grams of crack cocaine were given jail sentences of 5 years without parole (the same sentence as people caught with 500 grams). The legislation was in response to the moral panic involving the crack cocaine epidemic of the 1980’s. In 2010 Congress and President Obama eliminated the crack cocaine mandatory sentence with the passage of the Fair Sentencing Act. Opponents of mandatory minimum sentences argue that they often impose long prison terms on non-violent criminals. Proponents argue that the sentences are designed to help judges punish drug cartels and those responsible for the country’s drug epidemic."]
    ],
    'Economy' : [
      ["Should the government raise the federal minimum wage?","The federal minimum wage is the lowest wage at which employers may pay their employees. Since July 24, 2009 the U.S. federal minimum wage has been set at $7.25 per hour. In 2014 President Obama proposed raising the federal minimum wage to $10.10 and tying it to an inflation index. The federal minimum wage applies to all federal employees including those who work on military bases, national parks and veterans working in nursing homes."],
      ["Should the U.S. raise taxes on the rich?","Australia currently has a progressive tax system whereby high income earners pay a higher percentage of tax than low income tax. A more progressive income tax system has been proposed as a tool towards reducing wealth inequality."],
      ["Should the U.S. raise the tax rate for corporations?","The U.S. currently levies a 35% tax rate at the federal level and an average tax of 4% at the state and local level. The average corporate tax rate worldwide is 22.6%. Opponents of argue that raising the rate will discourage foreign investment and hurt the economy. Proponents argue that the profits corporations generate should be taxed just like citizen’s taxes."],
      ["Should employers be required to pay men and women the same salary for the same job?","In 2014 the U.S. Senate blocked the Paycheck Fairness Act which would make it illegal for employers to pay unequal wages to men and women who perform the same work. The goals of the act were to make wages more transparent, require employers to prove that wage discrepancies are tied to legitimate business qualifications and not gender and prohibiting companies from taking retaliatory action against employees who raise concerns about gender-based wage discrimination. Opponents argue that studies which show pay gaps don’t take into account women who take jobs that are more family-friendly in terms of benefits rather than wages and that women are more likely to take breaks in employment to care for children or parents. Proponents point to studies including a 2008 census bureau report that stated that women's median annual earnings were 77.5% of men's earnings."],
      ["Should the government make cuts to public spending in order to reduce the national debt?","Proponents of deficit reduction argue that governments who do not control budget deficits and debt are at risk of losing their ability to borrow money at affordable rates. Opponents of deficit reduction argue that government spending would increase demand for goods and services and help avert a dangerous fall into deflation, a downward spiral in wages and prices that can cripple an economy for years."]
    ],
    'Education' : [
      ["Do you support increasing taxes for the rich in order to reduce interest rates for student loans?","Last Spring the U.S. Senate defeated The Bank on Students Emergency Loan Refinancing Act by a vote of 58-38. The act, proposed by Senator Elizabeth Warren (D-MA) would lower the interest rate on existing student loans from 7% to 3.86%. The act would be financed by levying a mandatory income tax of 30% on everyone who earns between $1 Million and $2 Million dollars per year. Proponents argue that current student loan interest rates are nearly double normal interest rates and should be lowered to provide relief for millions of low-income borrowers. Opponents argue that the borrowers agreed to pay the interest rates when they took out the loans and taxing the rich would hurt the economy."],
      ["Should the federal government pay for tuition at four-year colleges and universities?","A 2017 College Board study estimated that the cost of college has increased 100% since 2001. The St. Louis Federal Reserve Bank estimates that U.S. college tuition debt has increased from $480 billion in 2006 to $1.5 trillion in 2018. Several 2020 Democratic Presidential Primary candidates have argued that the cost of college is out of control and that the government should pay for tuition. Opponents argue that the government cant afford it and point to estimates from the Committee for a Responsible Federal budget that estimate programs would cost the government $80 billion a year."],
      ["Should the federal government fund Universal preschool?","Universal preschool is a proposal that would use funding from the federal government to provide school to children before they reach Kindergarten. In the current U.S. public education system government funded school is guaranteed to all children from kindergarten to 12th grade. number of U.S. states use state tax revenue to fund part-time and full-time preschool for children between the ages of 3 and 5. Half of the states that offer pre-K programs limit enrollment to low-income children. Proponents that preschool is too expensive for most American families and according to The Chicago Child-Parent Center's Longitudinal Study children who attend preschool found on average that children make significant gains in cognitive, language and early math and reading skills. Opponents point to a 2005 study done by the RAND Corp. which showed “no significant impacts in education – in the short or long term.”"],
      ["Do you support charter schools?","Charter schools are tax payer funded K-12 schools that are managed by private companies. In the U.S. there are approximately 2.9 million students enrolled in 6,700 charter schools. Charter schools are approved and governed by city, county or state governments. Beneficiaries of private schools include real-estate investors who typically own the buildings and land where the schools are housed. Opponents of charter schools argue that they take money away from the public education system and enrich private companies and real estate investors who own the land where the schools are built. Proponents argue that students in charter schools consistently have higher test scores than public school students and note that there are millions of students across the U.S. who are currently on waitlists for private schools."]
    ],
    'Gun Regulation' : [
      ["Should teachers be allowed to carry guns at school?","The 2012 Sandy Hook Elementary School shootings caused several states and cities to pass strict gun control measures. In response, state lawmakers in gun friendly states in the South and West passed bills that would strengthen Stand Your Ground laws and allow weapons in most public places. In 2014, 21 states passed laws that expanded the rights of gun owners allowing them to possess firearms in churches, bars, schools and college campuses. The federal government has not passed any gun control measures since the 1994 Brady Bill and 42 states now allow the possession of assault rifles. In the U.S. two-thirds of all gun deaths are suicides and in 2010 there were 19,000 firearm suicides and 11,000 firearm homicides."],
      ["Should the federal government institute a mandatory buyback of assault weapons?", "A gun buyback program is one where the government purchases guns from private citizens. The goal of these programs is to reduce the number of guns owned by private citizens. In most gun buyback programs the police are the agents buying the guns. In 2019 Presidential candidates Joe Biden, Beto O’Rourke, Kamala Harris and Julian Castro each proposed a mandatory gun buyback program where the federal government would purchase AK-47’s and AR-15’s from private citizens. In the past U.S. gun buyback programs have been implemented by state and city governments."],
      ["Should victims of gun violence be allowed to sue firearms dealers and manufacturers?","In 2005, Congress passed the Protection of Lawful Commerce in Arms Act (PLCAA). The law protects gun manufacturers and dealers from being held liable when crimes have been committed with their products. The law was passed in response to a series of lawsuits filed against the gun industry in the late 1990s which claimed gun-makers and sellers were not doing enough to prevent crimes committed with their products. Proponents of the law argue that lawsuits will discourage gun manufacturers from supplying stores who sell guns that end up being used in violent crimes. Opponents argue that gun manufacturers are not responsible for random acts of violence committed with their products."],
      ["Should people on the “no-fly list” be banned from purchasing guns and ammunition?","After the December shooting in San Bernardino, CA, President Obama stated in his weekly radio address that it was “insane” to allow suspected terrorists on the country’s no-fly list to purchase guns. Shortly after, Senate Democrats introduced a measure that would have restricted anyone on the federal terrorism watch list, also known as the no-fly list, from being able to purchase firearms in the U.S. The measure did not pass after Senate Republicans voted down the measure."]
    ],
    'Trade' : [
      ["Do you support President Obama’s move to lift the trade and travel embargo on Cuba?","In December 2014 President Obama ordered the restoration of full democratic relations with Cuba. The order lifted a 54 year old trade embargo and eased restrictions on banking and American’s travel to the country. Proponents of relations with Cuba argue that U.S. influence through tourism and trade will promote capitalism and weaken its communist regime. Opponents argue that trade and diplomatic relations will only strengthen the communist regime’s grip on the Cuban government."]
    ],
    'Energy and Environmental Issues' : [
      ["Should the government increase environmental regulations to prevent climate change?","Global warming, or climate change, is an increase in the earth's atmospheric temperature since the late nineteenth century. In politics the debate over global warming is centered on whether this increase in temperature is due to greenhouse gas emissions or is the result of a natural pattern in the earth's temperature."],
      ["Should disposable products (such as plastic cups, plates, and cutlery) that contain less than 50% of biodegradable material be banned?","In 2016, France became the first country to ban the sale of plastic disposable products that contain less than 50% of biodegradable material and in 2017, India passed a law banning all plastic disposable plastic products."],
      ["Should the U.S. withdraw from the Paris Climate Agreement?","In June 2017, President Trump announced that the U.S. would withdraw from the Paris climate accord in an effort to boost the nation’s industry and energy independence. Mr. Trump argued that the climate accord was unfair to the U.S. since the agreement imposed easier restrictions on China and India who lead the world in carbon emissions. Opponents of the climate agreement argue that it unfairly penalizes U.S. energy companies and consumers by imposing restrictions on domestic energy production. Proponents of the climate accord argue that exiting it sets back decades of diplomatic efforts by the U.S. government to reduce worldwide carbon emissions."]
    ],
    'Immigration' : [
      ["Should the U.S. build a wall along the southern border?","In 2015 U.S. Presidential candidate Donald Trump issued a proposal to build a wall along the Mexico-U.S. border. The wall would extend along the 1,900 mile border and would prevent illegal goods and people from entering the U.S. In 2013 the Government Accountability Office reported that the border patrol had intercepted 61% of individuals who had attempted to cross the border that year. Analysts say that building a wall along the entire border is impossible since it parts of it contain rocky, uneven terrain. Proponents argue that the wall will cut down on the flow of illegal immigrants and drugs into the U.S. Opponents argue that the wall is impossible to build and illegal immigration into the U.S. has declined significantly since the 2008 financial crisis."],
      ["Should illegal immigrants be offered in-state tuition rates at public colleges within their residing state?","Currently sixteen states (California, Colorado, Connecticut, Illinois, Kansas, Maryland, Minnesota, Nebraska, New Jersey, New Mexico, New York, Oklahoma, Oregon, Texas, Utah, and Washington) allow illegal immigrants to pay the same in-state tuition rates as other residents of the state. To qualify, students must have attended a school in the state for a certain number of years, have graduated high school in the state, have confirmed they are applying for legal citizenship."],
      ["Should illegal immigrants have access to government-subsidized healthcare?","Illegal immigrants, as well as legal immigrants in the country less than five years, are not eligible for free healthcare through Medicaid. A 2007 study estimated that less than 1 percent of Medicaid spending went to healthcare for illegal immigrants. Proponents of subsidized healthcare for immigrants argue that increased access to basic preventive care will lower the demand for costly emergency care. Opponents argue that immigrants in the healthcare system run the risk of becoming \"permanent patients,\" because they have no relatives, insurance or an established address where they can go once released."]
    ],
    'Healthcare' : [
      ["Do you support the Patient Protection and Affordable Care Act (Obamacare)?","The Affordable Care Act is a federal statute signed into law in 2010 that introduces a sweeping overhaul of the nation's healthcare system. The act grants the federal government significant regulatory powers and price controls over U.S. medical service providers and insurance companies."],
      ["Should the federal government increase funding of health care for low income individuals (Medicaid)?","When the Affordable Care Act (Obamacare) was enacted in 2010 it required all states to expand their Medicaid programs to include people with incomes slightly higher than those allowed under traditional Medicaid, as well as groups, like childless adults, that had not previously been covered. In 2012 the Supreme Court ruled that forcing States to expand their Medicaid coverage was unconstitutional. Since then 22 states have expanded their coverage and more than 35 have opted not to do so. Proponents of the expansion argue that it will lower healthcare costs for everyone by reducing the number of Americans without health insurance. Opponents argue that states should be allowed to run their own Medicaid programs without the intervention of the federal government."],
      ["Do you support a single-payer healthcare system?","Single-payer healthcare is a system where every citizen pays the government to provide core healthcare services for all residents. Under this system the government may provide the care themselves or pay a private healthcare provider to do so. In a single-payer system all residents receive healthcare regardless of age, income or health status. Countries with single-payer healthcare systems include the U.K., Canada, Taiwan, Israel, France, Belarus, Russia and Ukraine."]
    ],
    'Foreign Policy' : [
      ["Should foreign terrorism suspects be given constitutional rights?","In 2002, the George W. Bush administration issued the Torture Memos which argued for a narrow definition of torture under U.S. law. They included granting the CIA authority to use “enhanced interrogation techniques” on enemy combatants. The techniques included waterboarding subjection to extreme cold and confinement in small boxes."],
      ["Should the U.S. accept refugees from Syria?","President Obama recently declared that the U.S. will accept 10,000 refugees from Syria. The U.S. has been under pressure from its Syrian allies to help out with the crisis in which 3 Million refugees have fled Syria in the past year. Those in favor of accepting refugees believe that the U.S. has a duty to join its allies in Europe and accept at least 10,000 refugees. Opponents argue that the U.S. should stay out of this crisis and accepting refugees from the Middle East leads to a risk of letting terrorists into our borders."],
      ["Should the government increase military spending?","In 2015, the U.S.’ estimated military budget is expected to be $601 billion, down from $610 billion spent in 2014. The U.S. outspends the next six highest spending nations combined. China has the second largest budget at $216 billion and Russia has the third largest with $84.5 billion."],
      ["Should every 18 year old citizen be required to provide at least one year of military service?","Military service is not required in the U.S. Proponents of required service argue that it isn’t fair that a small percentage of Americans serve in the military to protect the rest of the population. Opponents argue that the requirement is unnecessary because modern warfare is fought less and less with ground troops and more with unmanned technology including drones."],
      ["Should the U.S. remain in the United Nations?","The UN. is an organization of governments founded in 1945 after World War II. The organization's objectives include promoting peace and security, protecting human rights and the environment and providing humanitarian aid in cases of famine, natural disaster, and armed conflict. Recent U.N. interventions include the Sri Lankan civil war in 2009 and the 2010 earthquake in Haiti. The U.S. joined the U.N. as a founding member in 1945. The U.S. is the largest financial contributor to the UN and contributes more than $650 million annually."],
      ["Should the US assassinate suspected terrorists in foreign countries?","None."],
      ["Should the President be able to authorize military force against Al-Qaeda without Congressional approval?","After the September 11, 2001 terrorist attacks the U.S. Congress passed the Authorization for Use of Military Force. The resolution authorizes the president to undertake war against al-Qaeda and its affiliates without Congressional approval. Since 2001 the law has been used to approve military conflicts in Afghanistan, Iraq, and Syria. Proponents argue that the law is necessary to give the President the powers to act quickly in order to prevent another terrorist attack on the U.S. Opponents argue that all U.S. military conflicts should have Congressional approval and this act has been used in military conflicts that have nothing to do with al-Qaeda."]
    ],
    'Domestic Policy' : [
      ["Do you support the impeachment of President Donald Trump?","Impeachment is the process in which a legislative body produces a statement of charges against a government official. Although the subject of the charge is criminal action, it does not constitute a criminal trial. Impeachment does not remove the official from office. On December 18, 2019 the U.S. House of Representatives approved articles of impeachment against President Donald Trump. A House impeachment inquiry alleged that Trump threatened to withhold $400 million in foreign aid to Ukraine unless it provided damaging information to the Trump campaign on 2020 Democratic Presidential candidate Joe Biden. The House vote broke down party lines with 229 Democrats voting “Yea” to impeach and all 195 Republicans voting “Nay.” Democratic Representatives Collin Peterson (MN) and Jeff Van Drew (NJ) voted “Nay.” Rep. Tulsi Gabbard voted “present.” In the U.S. House of Representatives a member may vote “present” rather than for or against a bill or resolution."],
      ["Should it be illegal to burn the American flag?","In 2006, the U.S. Senate rejected a Constitutional Amendment which would have allowed Congress to pass legislation prohibiting the burning or desecration of the U.S. flag. The Flag Protection Act of 2005 was introduced by Senators Bob Bennett (R-Utah), Hillary Clinton (D-NY), Barbara Boxer (D-CA), Mark Pryor (D-ARK) and Thomas Carper (D-Del). The Act proposed a punishment of up to one year in jail and a fine of no more than $100,000."],
      ["Do you support the Patriot Act?","In response to the 9/11 terrorist attacks, the Patriot Act expanded intelligence gathering capabilities including: monitoring of foreign financial transactions, detaining and deporting immigrants suspected of terrorism, wiretaps, business record searches, and surveillance of individuals suspected of terrorist activities."],
      ["Should the Supreme Court be reformed to include more seats and term limits on judges?","In early 2020, several Democratic presidential candidates including Kamala Harris, Elizabeth Warren, Kirsten Gillibrand, Pete Buttigieg and Beto O’Rourke offered different proposals to reforming the Supreme Court. The proposals include adding 5 democratically elected judges to the current court and imposing term limits on current judges. According to the U.S. federal statute, justices have lifetime tenure unless they resign, retire, or are removed from office. Proponents of Supreme Court reform argue that the current court will be filled with too many conservative judges for the next several decades and it is not representative of the US population. Opponents argue that the plans are unconstitutional, would upset the balance of power and reinforce the idea that there are Democratic judges and Republican judges."],
      ["Should the government be allowed to seize private property, with reasonable compensation, for public or civic use?","Eminent domain is the power of a state or a national government to take private property for public use. It can be legislatively delegated by state governments to municipalities, government subdivisions, or even to private persons or corporations, when they are authorized to exercise the functions of public character. Opponents, including Conservatives and Libertarians in New Hampshire, oppose giving the government the power to seize property for private projects, like casinos. Proponents, including advocates of oil pipelines and national parks, argue that the construction of roads and schools would not be possible if the government could not seize land under eminent domain."],
      ["Should the U.S. government grant immunity to Edward Snowden?","Edward Snowden is a former National Security Agency contractor who turned over classified documents revealing a board global surveillance program previously unknown to anyone outside the intelligence community. After the documents were published in the Guardian Newspaper in June 2013 Snowden fled to Russia where he is currently living under asylum."]
    ]
  }



  const selectPolicy = () => {
    $('#nav1 a, #navQuestions1 a').click( e => {
      e.preventDefault();
      ['‹','›','»','«'].indexOf(e.target.text) === -1 ? showPolicy(e.target.id) : navigationBar(e.target.text);

    });
  }

  const loadAnswer = (question) => {
    let answer = JSON.parse(window.localStorage.getItem(question)) || null;

    if(answer != null){
      let key = parseInt(Object.keys(answer));
      if(typeof answer[key] == 'string') $('input[type=radio]')[parseInt(answer[key])-1].checked = true;
      else {
          $('input[type=radio]')[2].checked = true;
          $('textarea').show(true);
          $('textarea').val(`${answer[key][3]}`);
      }
      return key;
    }

    return 0;

  }

  const loadRegister = () => {
    let user = JSON.parse(window.localStorage.getItem('Register')) || null;

    user ? $('#register input').each( (i,v) => {
      $(`label[for=${v.name}]`).html(null);
      user[v.name] ? $(`#register input[name=${v.name}]`).val(`${user[v.name]}`) : null;
    }) : null;

  }

  const showPolicy = (question) => {
    $('input:checked').prop('checked', false);
    $('#info').hide(true);
    $('textarea').hide(true);
    $('#policy').text(question);
    $('title').text(`${question} | Voting App`);

    if(question === 'Register'){
      $('#summary').hide(true);
      $('#register').show(true);
      $('#policy').html(`${question} <i>(Optional)</i>`);
      loadRegister();
      return;
    }

    $('#summary').show(true);
    $('#register').hide(true);
    $('#questions').html(null);
    questions[question].forEach( (q,i) => { $('#questions').append(`<option value="${i}">Question ${i+1}</option>`); });

    key = loadAnswer(question);
    showQuestion(question, key);
  }

  const showQuestion = (question, key=0) => {

    $('select').val(key);
    $('#question').text(`${questions[question][key][0]}`);
    $('#info').text(`${questions[question][key][1]}`);

  }

  const navigationBar = (change) => {

    let links = '';
    let policies = Object.keys(questions);
    let index = parseInt(window.localStorage.getItem('index')) || 0;

    switch(change){
      case '‹':
        index = index-1 < 0 ? policies.length-1 : index-1; break;
      case '›':
        index = index+1 > policies.length-1 ? 0 : index+1; break;
      case '»':
        index = policies.length-3; break;
      case '«':
      default:
        index = 0; break;
    }

    for(let i = 0; i < 3; i++){

      let policy = index+i > policies.length-1 ? index+i-policies.length : index+i;
      links += `<a href="#" class="w3-bar-item w3-button" id="${policies[policy]}">${policies[policy]}</a>`
    }

    $('#nav1').html(null);
    var back1 = '<a href="#" id="back1" class="w3-bar-item w3-button">&lsaquo;</a>';
    var back2 = index !== 0 ? '<a href="#" id="back2" class="w3-bar-item w3-button">&laquo;</a>' : null;
    var forward1 = '<a href="#" id="forward1" class="w3-bar-item w3-button">&rsaquo;</a>';
    var forward2 = index < policies.length-3 ? '<a href="#" id="forward2" class="w3-bar-item w3-button">&raquo;</a>' : null;
    $('#nav1').append(back2, back1, links, forward1, forward2);
    window.localStorage.setItem('index', index);
    selectPolicy();
  }

  navigationBar(0);
  showPolicy('Register');


  /**
  Question drop down list event handler
  **/
  $('select').change( e => {

    let current = JSON.parse(window.localStorage.getItem(`${$('#policy').text()}`)) || null;

    showQuestion( $('#policy').text(), parseInt(e.target.value));

    if(current == null) return;
    else if(Object.keys(current)[0] != e.target.value){
      $('input:checked').prop('checked', false);
      $('#info').hide(true);
      $('textarea').hide(true);
    }
    else loadAnswer($('#policy').text());


  });



})
