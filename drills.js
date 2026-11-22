// ============================================================================
// MERCER ISLAND FC — 150 BUILT-IN DRILL LIBRARY & DIAGRAM TEMPLATES (drills.js)
// Upload this file to the same GitHub repository folder as your index.html
// ============================================================================

const MIFC_COLORS = { M: '#7A1C24', B: '#1976D2', Y: '#FBC02D', G: '#388E3C', C: '#212529' };
const _P = (color, label, x, y) => ({ type: 'player', color, label, x, y });
const _Eq = (type, x, y, label = '') => ({ type, color: '#FF6D00', label, x, y });
const _L = (type, x1, y1, x2, y2) => ({ type, x1, y1, x2, y2 });

function buildTacticalDiagram(tpl) {
  const { M, B, Y, G, C } = MIFC_COLORS;
  let pitch = 'ssg', zones = [], tokens = [], lines = [];

  if (tpl === 'rondo_4v2') {
    zones = [{x:280, y:130, w:280, h:280}];
    tokens = [_P(M,'M1',420,130), _P(M,'M2',560,270), _P(M,'M3',420,410), _P(M,'M4',280,270), _P(B,'D1',380,220), _P(B,'D2',460,290), _Eq('ball',420,148)];
    lines = [_L('pass',420,150,542,265), _L('pass',542,278,430,395), _L('run',380,220,415,155), _L('run',460,290,530,270)];
  } else if (tpl === 'rondo_4v2_1') {
    zones = [{x:280, y:130, w:280, h:280}];
    tokens = [_P(M,'M1',420,130), _P(M,'M2',560,270), _P(M,'M3',420,410), _P(M,'M4',280,270), _P(Y,'FL',420,270), _P(B,'D1',370,210), _P(B,'D2',465,230), _Eq('ball',420,148)];
    lines = [_L('pass',420,150,420,250), _L('pass',435,275,542,270), _L('run',370,210,410,160), _L('run',465,230,435,255)];
  } else if (tpl === 'rondo_5v2') {
    zones = [{x:280, y:130, w:280, h:280}];
    tokens = [_P(M,'M1',280,260), _P(M,'M2',370,130), _P(M,'M3',500,130), _P(M,'M4',560,270), _P(M,'M5',420,410), _P(B,'D1',360,230), _P(B,'D2',450,290), _Eq('ball',298,248)];
    lines = [_L('pass',298,248,360,145), _L('pass',385,135,485,135), _L('run',360,230,368,155), _L('run',450,290,480,160)];
  } else if (tpl === 'rondo_6v2') {
    zones = [{x:260, y:130, w:320, h:280}];
    tokens = [_P(M,'M1',350,130), _P(M,'M2',490,130), _P(M,'M3',580,270), _P(M,'M4',490,410), _P(M,'M5',350,410), _P(M,'M6',260,270), _P(Y,'FL',420,270), _P(B,'D1',370,220), _P(B,'D2',470,310), _Eq('ball',355,148)];
    lines = [_L('pass',355,148,410,255), _L('pass',435,270,562,270), _L('run',370,220,355,160), _L('run',470,310,435,280)];
  } else if (tpl === 'rondo_8v2') {
    zones = [{x:260, y:120, w:320, h:300}];
    tokens = [_P(M,'1',350,120), _P(M,'2',490,120), _P(M,'3',580,200), _P(M,'4',580,340), _P(M,'5',490,420), _P(M,'6',350,420), _P(M,'7',260,340), _P(M,'8',260,200), _P(B,'D1',380,230), _P(B,'D2',460,290), _Eq('ball',355,138)];
    lines = [_L('pass',365,130,475,130), _L('pass',500,135,565,190), _L('run',380,230,365,150), _L('run',460,290,480,150)];
  } else if (tpl === 'rondo_hunt') {
    zones = [{x:260, y:110, w:320, h:320}];
    tokens = [_P(M,'M1',260,200), _P(M,'M2',260,340), _P(M,'M3',420,110), _P(Y,'Y1',580,210), _P(Y,'Y2',420,430), _P(Y,'Y3',420,270), _P(B,'B1',340,220), _P(B,'B2',350,310), _P(B,'B3',470,240), _Eq('ball',278,205)];
    lines = [_L('pass',278,205,402,265), _L('pass',438,265,562,215), _L('run',340,220,285,205), _L('run',470,240,435,260)];
  } else if (tpl === 'circle_press') {
    pitch = 'full';
    tokens = [_P(M,'M1',375,230), _P(M,'M2',465,230), _P(M,'M3',375,310), _P(M,'M4',465,310), _P(Y,'J1',420,205), _P(Y,'J2',420,270), _P(Y,'J3',420,335), _P(B,'B1',398,245), _P(B,'B2',442,250), _P(B,'B3',400,295), _P(B,'B4',445,295), _Eq('ball',420,222)];
    lines = [_L('pass',420,220,455,228), _L('pass',455,238,430,265), _L('run',398,245,415,220), _L('run',442,250,455,235)];
  } else if (tpl === 'diamond_circuit') {
    zones = [{x:220, y:90, w:400, h:360}];
    tokens = [_Eq('mannequin',420,130), _Eq('mannequin',560,270), _Eq('mannequin',420,410), _Eq('mannequin',280,270), _P(M,'A',420,445), _P(M,'B',245,270), _P(M,'C',420,95), _P(M,'D',595,270), _P(M,'M',420,270), _Eq('ball',410,430)];
    lines = [_L('pass',405,430,265,280), _L('pass',265,265,400,270), _L('run',255,255,305,210), _L('pass',415,255,315,210), _L('pass',320,200,410,112), _L('pass',435,112,575,255)];
  } else if (tpl === 'hex_circuit') {
    zones = [{x:180, y:90, w:480, h:360}];
    tokens = [_Eq('cone',300,140), _Eq('cone',540,140), _Eq('cone',620,270), _Eq('cone',540,400), _Eq('cone',300,400), _Eq('cone',220,270), _P(M,'A1',285,425), _P(M,'B1',195,270), _P(M,'C1',285,115), _P(M,'D1',420,240), _P(M,'A2',555,115), _P(M,'B2',645,270), _P(M,'C2',555,425), _P(M,'D2',420,300), _Eq('minigoal',560,85), _Eq('minigoal',280,455), _Eq('ball',275,410)];
    lines = [_L('pass',275,410,205,285), _L('pass',205,255,275,130), _L('pass',295,125,405,230), _L('pass',435,230,545,100)];
  } else if (tpl === 'pos_4v4_3') {
    zones = [{x:230, y:110, w:380, h:320}];
    tokens = [_P(Y,'LB',230,190), _P(Y,'RB',230,350), _P(Y,'AM',610,270), _P(M,'CB',290,220), _P(M,'CB',290,320), _P(M,'DM',410,270), _P(M,'LW',520,130), _P(M,'RW',520,410), _P(B,'B1',340,210), _P(B,'B2',340,330), _P(B,'B3',450,230), _P(B,'B4',450,310), _Eq('ball',248,195)];
    lines = [_L('pass',248,195,280,215), _L('pass',305,225,395,265), _L('pass',425,260,505,142), _L('pass',530,145,595,258)];
  } else if (tpl === 'pos_end2end') {
    zones = [{x:200, y:110, w:440, h:320}];
    tokens = [_P(G,'GK1',185,270), _P(G,'GK2',655,270), _P(Y,'J1',350,270), _P(Y,'J2',490,270), _P(M,'M1',260,160), _P(M,'M2',260,380), _P(M,'M3',420,130), _P(M,'M4',420,410), _P(M,'M5',560,180), _P(M,'M6',560,360), _P(B,'B1',300,220), _P(B,'B2',300,320), _P(B,'B3',440,210), _P(B,'B4',440,330), _P(B,'B5',540,270), _Eq('ball',205,265)];
    lines = [_L('pass',205,265,250,175), _L('pass',272,170,340,258), _L('pass',365,262,410,145), _L('pass',435,145,482,258), _L('pass',505,270,635,270)];
  } else if (tpl === 'rdz_244') {
    pitch = 'full'; zones = [{x:130, y:155, w:270, h:230}];
    tokens = [_P(G,'GK',75,270), _P(M,'CB',150,190), _P(M,'CB',150,350), _P(M,'LB',260,80), _P(M,'RB',260,460), _P(M,'DM',275,220), _P(M,'DM',275,320), _P(M,'AM',410,215), _P(M,'F',430,325), _P(M,'LW',550,75), _P(M,'RW',550,465), _P(B,'9',215,225), _P(B,'10',215,315), _P(B,'8',350,190), _P(B,'6',350,350), _Eq('ball',155,332)];
    lines = [_L('pass',150,210,150,330), _L('run',215,315,170,340), _L('pass',168,342,392,222), _L('pass',392,222,295,222), _L('pass',295,225,412,320), _L('run',445,325,540,325)];
  } else if (tpl === 'rdz_5v3') {
    zones = [{x:580, y:110, w:90, h:320}];
    tokens = [_P(C,'C',180,270), _P(M,'CB1',260,190), _P(M,'CB2',260,350), _P(M,'DM',360,270), _P(M,'LCM',490,160), _P(M,'RCM',490,380), _P(B,'B1',390,190), _P(B,'B2',420,270), _P(B,'B3',390,350), _Eq('minigoal',670,170), _Eq('minigoal',670,370), _Eq('ball',265,332)];
    lines = [_L('pass',272,340,345,280), _L('pass',345,260,275,200), _L('dribble',280,190,350,190), _L('pass',360,185,472,162), _L('dribble',508,160,600,165), _L('pass',605,165,650,170)];
  } else if (tpl === 'pep_2323') {
    pitch = 'pep';
    tokens = [_P(M,'CB',270,210), _P(M,'CB',270,330), _P(M,'LB',380,160), _P(M,'DM',390,270), _P(M,'RB',380,380), _P(M,'10',530,165), _P(M,'8',530,375), _P(M,'LW',630,65), _P(M,'RW',630,475), _P(M,'9',640,270), _P(G,'GK',785,270), _Eq('mannequin',610,135), _Eq('mannequin',610,225), _Eq('mannequin',610,315), _Eq('mannequin',610,405), _Eq('ball',285,330)];
    lines = [_L('pass',288,335,362,375), _L('pass',382,362,390,290), _L('pass',405,260,515,175), _L('dribble',545,165,590,165), _L('pass',595,160,710,95), _L('run',645,65,715,90), _L('pass',715,105,695,260), _L('run',655,270,690,270)];
  } else if (tpl === 'pep_352') {
    pitch = 'pep';
    tokens = [_P(M,'LCB',260,140), _P(M,'CB',240,270), _P(M,'RCB',260,400), _P(M,'LWB',450,65), _P(M,'RWB',450,475), _P(M,'DM',370,270), _P(M,'21',470,175), _P(M,'17',470,365), _P(M,'10',585,240), _P(M,'7',555,315), _P(G,'GK',785,270), _Eq('mannequin',625,120), _Eq('mannequin',625,200), _Eq('mannequin',625,275), _Eq('mannequin',625,350), _Eq('mannequin',625,425), _Eq('ball',260,158)];
    lines = [_L('pass',258,158,242,252), _L('pass',245,288,258,382), _L('pass',278,395,452,368), _L('pass',455,355,385,282), _L('pass',388,268,568,242), _L('pass',580,258,560,298), _L('pass',572,318,690,365), _L('run',488,365,685,365), _L('pass',695,350,695,255)];
  } else if (tpl === 'wide_3v3_gk') {
    pitch = 'half'; zones = [{x:480, y:160, w:280, h:320}];
    tokens = [_P(G,'GK',420,60), _P(M,'CB',550,130), _P(M,'FB',720,240), _P(M,'DM',520,280), _P(M,'W',710,420), _P(B,'B1',635,210), _P(B,'B2',545,255), _P(B,'B3',695,385), _Eq('ball',440,65)];
    lines = [_L('pass',440,65,532,122), _L('dribble',555,145,580,195), _L('run',710,402,655,310), _L('pass',585,200,648,300), _L('pass',662,300,715,260), _L('dribble',720,260,720,440)];
  } else if (tpl === 'wave_3v2') {
    pitch = 'half';
    tokens = [_P(G,'GK',420,55), _P(B,'D1',360,175), _P(B,'D2',480,175), _P(M,'M1',280,350), _P(M,'M2',420,360), _P(M,'M3',560,350), _Eq('minigoal',220,495), _Eq('minigoal',620,495), _Eq('ball',420,340)];
    lines = [_L('dribble',420,340,420,230), _L('run',280,335,310,160), _L('run',560,335,530,160), _L('pass',405,225,320,165), _L('pass',325,150,405,80)];
  } else if (tpl === 'wave_6v5') {
    pitch = 'full';
    tokens = [_Eq('minigoal',120,270), _Eq('minigoal',720,270), _P(C,'C',420,60), _P(M,'M1',390,230), _P(M,'M2',350,310), _P(M,'M3',290,190), _P(B,'B1',480,240), _P(B,'B2',490,305), _P(M,'M4',140,150), _P(M,'M5',140,390), _P(B,'B3',700,150), _P(B,'B4',700,390), _Eq('ball',368,305)];
    lines = [_L('dribble',368,305,455,285), _L('run',390,230,540,210), _L('pass',460,280,535,215), _L('pass',545,220,695,268)];
  } else if (tpl === 'back2back') {
    zones = [];
    tokens = [_Eq('minigoal',400,270), _Eq('minigoal',440,270), _P(G,'GK',375,270), _P(G,'GK',465,270), _P(M,'M1',230,180), _P(M,'M2',230,360), _P(M,'M3',380,120), _P(M,'M4',580,190), _P(M,'M5',590,350), _P(B,'B1',270,230), _P(B,'B2',280,320), _P(B,'B3',410,155), _P(B,'B4',535,225), _P(B,'B5',540,325), _Eq('ball',245,180)];
    lines = [_L('pass',245,175,362,125), _L('dribble',395,120,510,140), _L('pass',515,145,570,182), _L('pass',565,195,485,265)];
  } else if (tpl === 'press_trap') {
    pitch = 'half';
    tokens = [_P(G,'GK',420,55), _P(B,'CB',310,115), _P(B,'CB',530,115), _P(B,'RB',150,210), _P(B,'LB',690,210), _P(B,'DM',420,195), _P(B,'CM',310,285), _P(B,'CM',530,285), _P(M,'9',450,125), _P(M,'RCM',435,210), _P(M,'LW',220,225), _P(M,'LCM',325,265), _P(M,'DM',430,320), _P(M,'RW',600,260), _Eq('ball',405,62)];
    lines = [_L('pass',405,62,328,110), _L('run',435,195,425,180), _L('run',450,125,345,120), _L('pass',295,122,168,200), _L('run',220,225,170,210), _L('run',325,265,312,272)];
  } else if (tpl === 'def_arc') {
    pitch = 'half';
    tokens = [_P(G,'GK',420,55), _P(M,'LB',250,155), _P(M,'LCB',350,135), _P(M,'RCB',450,140), _P(M,'RB',560,165), _P(M,'DM',390,210), _P(B,'LW',160,230), _P(B,'LDM',310,290), _P(B,'LF',350,210), _P(B,'RF',490,210), _P(B,'RDM',530,290), _P(B,'RW',680,230), _Eq('ball',325,285)];
    lines = [_L('pass',325,285,178,235), _L('run',250,155,185,215), _L('run',350,135,280,150), _L('run',450,140,375,140), _L('run',560,165,465,155)];
  } else if (tpl === 'barca_3zone') {
    zones = [{x:385, y:90, w:70, h:360}];
    tokens = [_Eq('mannequin',420,135), _Eq('mannequin',420,225), _Eq('mannequin',420,315), _Eq('mannequin',420,405), _P(Y,'N6',405,180), _P(Y,'N8',435,270), _P(Y,'N10',405,360), _P(M,'M1',230,160), _P(M,'M2',210,270), _P(M,'M3',240,380), _P(B,'B1',290,190), _P(B,'B2',310,280), _P(B,'B3',290,350), _P(M,'M4',560,175), _P(M,'M5',590,270), _P(M,'M6',560,370), _P(B,'B4',510,210), _P(B,'B5',520,310), _P(B,'B6',620,330), _Eq('ball',228,265)];
    lines = [_L('pass',228,265,388,185), _L('pass',388,175,248,162), _L('pass',250,165,542,175), _L('pass',545,185,452,265)];
  } else if (tpl === 'barca_4corner') {
    zones = [{x:180, y:70, w:60, h:60}, {x:600, y:70, w:60, h:60}, {x:180, y:410, w:60, h:60}, {x:600, y:410, w:60, h:60}];
    tokens = [_P(Y,'N1',210,100), _P(Y,'N2',630,100), _P(Y,'N3',210,440), _P(Y,'N4',630,440), _P(M,'6',310,150), _P(M,'16',260,270), _P(M,'8',420,240), _P(M,'10',520,350), _P(B,'B1',340,210), _P(B,'B2',330,310), _P(B,'B3',460,190), _P(B,'B4',470,310), _Eq('ball',228,112)];
    lines = [_L('pass',228,112,295,145), _L('pass',225,118,255,252), _L('pass',230,115,405,232), _L('pass',435,250,508,338), _L('pass',535,360,615,428)];
  } else if (tpl === 'poch_4v4_1') {
    zones = [{x:250, y:100, w:340, h:340}];
    tokens = [_P(M,'M1',420,100), _P(M,'M2',590,270), _P(M,'M3',420,440), _P(M,'M4',250,270), _P(Y,'N',420,270), _P(B,'B1',360,200), _P(B,'B2',480,210), _P(B,'B3',470,330), _P(B,'B4',350,330), _Eq('ball',365,218)];
    lines = [_L('pass',372,215,408,258), _L('run',360,185,330,105), _L('run',495,210,585,190), _L('run',485,335,510,435), _L('run',335,330,255,340)];
  } else if (tpl === 'trans_2zone') {
    zones = [{x:160, y:90, w:260, h:360}, {x:420, y:90, w:260, h:360}];
    tokens = [_P(Y,'Y1',160,180), _P(Y,'Y2',160,360), _P(Y,'Y3',290,90), _P(Y,'Y4',290,450), _P(Y,'Y5',420,270), _P(M,'M1',230,160), _P(M,'M2',350,160), _P(M,'M3',280,270), _P(M,'M4',230,370), _P(M,'M5',350,370), _P(B,'B1',260,210), _P(B,'B2',330,220), _P(B,'B3',310,310), _P(B,'B4',245,320), _P(B,'B5',370,280), _Eq('ball',345,225)];
    lines = [_L('pass',345,225,405,265), _L('run',330,205,550,90), _L('run',385,280,680,240), _L('run',310,325,550,450)];
  } else if (tpl === 'trans_3zone') {
    pitch = 'full'; zones = [{x:270, y:30, w:300, h:480}];
    tokens = [_P(G,'GK',75,270), _P(G,'GK',765,270), _P(C,'C',420,55), _P(M,'M1',330,160), _P(M,'M2',330,380), _P(M,'M3',410,220), _P(M,'M4',430,320), _P(M,'M5',510,180), _P(M,'M6',520,340), _P(B,'B1',360,200), _P(B,'B2',370,340), _P(B,'B3',460,250), _P(B,'B4',470,360), _P(B,'B5',540,220), _P(B,'B6',540,300), _Eq('ball',428,220)];
    lines = [_L('pass',428,220,645,195), _L('run',525,180,640,190), _L('run',535,340,660,300), _L('pass',655,195,745,255)];
  } else if (tpl === 'lamche_cut') {
    pitch = 'half';
    tokens = [_P(G,'GK',420,55), _P(M,'6',300,120), _P(M,'5',540,120), _P(M,'2',110,230), _P(M,'3',730,230), _P(M,'4',420,230), _P(M,'8',290,300), _P(M,'10',490,320), _P(M,'7',100,410), _P(M,'11',740,410), _P(B,'9',330,165), _P(B,'10',500,165), _P(B,'11',160,250), _P(B,'7',680,250), _P(B,'8',410,295), _Eq('minigoal',180,505), _Eq('minigoal',660,505), _Eq('ball',400,62)];
    lines = [_L('run',300,138,385,200), _L('run',110,210,110,135), _L('pass',400,62,128,130), _L('run',290,282,235,225), _L('run',420,245,320,295), _L('pass',125,145,220,218), _L('pass',220,232,115,395)];
  } else if (tpl === 'lamche_x') {
    pitch = 'half';
    tokens = [_P(G,'GK',420,55), _P(M,'5',560,440), _P(M,'3',730,360), _P(M,'11',730,210), _P(M,'10',520,215), _P(M,'9',430,165), _P(M,'7',210,190), _Eq('mannequin',695,185), _Eq('mannequin',540,145), _Eq('mannequin',360,145), _Eq('ball',570,422)];
    lines = [_L('pass',572,422,718,225), _L('pass',722,228,722,338), _L('run',735,195,675,110), _L('pass',715,345,535,225), _L('pass',530,200,660,115), _L('pass',660,110,450,100)];
  } else if (tpl === 'set_piece') {
    pitch = 'half';
    tokens = [_P(G,'GK',420,50), _P(M,'7',795,40), _P(M,'8',725,105), _P(M,'10',530,155), _P(M,'9',330,155), _P(M,'11',430,190), _P(M,'4',450,255), _P(M,'2',690,215), _P(B,'D1',735,65), _P(B,'D2',700,85), _Eq('ball',782,45)];
    lines = [_L('pass',782,45,738,92), _L('pass',730,90,775,55), _L('run',715,95,665,55), _L('pass',775,52,672,55), _L('run',530,140,490,75), _L('run',330,140,355,75), _L('run',430,175,425,120), _L('pass',660,60,440,115)];
  } else if (tpl === 'dutch_1v1') {
    zones = [{x:340, y:200, w:160, h:140}];
    tokens = [_P(G,'GK',420,85), _Eq('minigoal',420,70), _Eq('minigoal',260,460), _Eq('minigoal',580,460), _P(M,'A1',420,440), _P(M,'A2',450,460), _P(B,'D1',420,250), _P(B,'D2',530,230), _Eq('cone',340,200), _Eq('cone',500,200), _Eq('cone',340,340), _Eq('cone',500,340), _Eq('ball',420,420)];
    lines = [_L('dribble',420,420,420,300), _L('run',420,250,410,285), _L('dribble',420,295,475,220), _L('pass',475,215,430,100)];
  } else if (tpl === 'dutch_endzone') {
    zones = [{x:140, y:90, w:90, h:360}, {x:610, y:90, w:90, h:360}];
    tokens = [_P(M,'M1',290,170), _P(M,'M2',280,360), _P(M,'M3',430,250), _P(M,'M4',530,150), _P(B,'B1',360,190), _P(B,'B2',380,340), _P(B,'B3',490,270), _P(B,'B4',560,200), _Eq('ball',445,245)];
    lines = [_L('pass',305,175,412,242), _L('run',545,150,645,150), _L('pass',448,242,635,155), _L('dribble',295,360,625,380)];
  } else if (tpl === 'ssg_4quad') {
    zones = [{x:240, y:90, w:180, h:180}, {x:420, y:90, w:180, h:180}, {x:240, y:270, w:180, h:180}, {x:420, y:270, w:180, h:180}];
    tokens = [_P(M,'M1',290,150), _P(B,'B1',350,200), _P(M,'M2',530,150), _P(B,'B2',470,200), _P(M,'M3',290,380), _P(B,'B3',350,330), _P(M,'M4',530,380), _P(B,'B4',470,330), _P(Y,'J1',380,140), _P(Y,'J2',455,385), _Eq('ball',308,148)];
    lines = [_L('pass',308,148,362,142), _L('pass',398,142,512,148), _L('run',380,158,380,310), _L('pass',530,168,530,362)];
  } else if (tpl === 'ssg_multigoal') {
    zones = [{x:210, y:95, w:420, h:350}];
    tokens = [_Eq('minigoal',210,160), _Eq('minigoal',210,380), _Eq('minigoal',630,160), _Eq('minigoal',630,380), _P(M,'M1',310,180), _P(M,'M2',310,360), _P(M,'M3',480,160), _P(M,'M4',490,350), _P(Y,'J',420,270), _P(B,'B1',360,210), _P(B,'B2',360,330), _P(B,'B3',530,200), _P(B,'B4',530,320), _Eq('ball',325,185)];
    lines = [_L('pass',325,185,405,260), _L('pass',435,260,470,175), _L('pass',495,160,610,160)];
  }

  return { pitch, zones, tokens, lines };
}

const RAW_LIBRARY = [
  {
    "id": "pass_1",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: Double Triangle Y-Drill",
    "age": "U11-Senior",
    "dims": "25x20 yds | 1-Touch",
    "obj": "Rapid 1-2 lay-offs and timing of angled support runs around mannequins.",
    "rules": "1. A passes to B (dropping off mannequin) -> 1-2 return to A.\n2. A passes diagonally to C -> C lays off to B moving around mannequin -> B passes diagonally to D.\n3. Rotate A -> B -> C -> D.",
    "pts": "• Quick support angles create simple 1-touch passes.\n• Arrive on the half-turn.",
    "prog": "• Run both left and right sides simultaneously."
  },
  {
    "id": "pass_2",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: 2-Ball Pass, Press & Follow Diamond",
    "age": "U12-Senior",
    "dims": "20x20 yds | 2 Balls",
    "obj": "Pass and immediately press the receiver, who plays 1-touch around the oncoming presser.",
    "rules": "1. Start with 2 balls at opposite ends (A1 & C1).\n2. A1 passes to B and immediately sprints to press B.\n3. B plays 1-touch past the left side of pressing A1 and runs around him to receive and pass to C2.",
    "pts": "• Disguise and 1-touch weight of pass past an onrushing presser.\n• Continuous rotation around the diamond.",
    "prog": "• Reverse direction from anti-clockwise to clockwise."
  },
  {
    "id": "pass_3",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: 2-Ball Speed Diamond (Direction Switch)",
    "age": "U11-Senior",
    "dims": "20x20 yds | 2 Balls",
    "obj": "Open up off the mannequin on the half-turn (2-touch control & pass) with instant direction changes.",
    "rules": "1. 2 balls start simultaneously at opposite tips of a mannequin diamond (A & C).\n2. Players check off the mannequin, receive on the back foot (half-turn), and pass to the next point (A->B->C->D).\n3. On Coach's whistle, immediately reverse the passing direction!",
    "pts": "• First touch must step out of the body ready to hit a firm pass.\n• Scan before the ball arrives.",
    "prog": "• Progress to 1-touch One-Two, Set, Switch & Give-and-Go around the diamond."
  },
  {
    "id": "pass_4",
    "cat": "PASSING",
    "tpl": "hex_circuit",
    "pitch": "ssg",
    "title": "Passing: Hexagon Pole Circuit to Mini Goals",
    "age": "U12-Senior",
    "dims": "30x25 yds | 2 Balls",
    "obj": "Receive angled outside/behind poles on the half-turn and finish into mini target goals.",
    "rules": "1. Mirrored hexagon circuit with 2 balls starting simultaneously at A1 & A2.\n2. Pass A -> B -> C -> D in the centre, with every player checking off their pole to open up on the back foot.\n3. Player D receives behind the central pole and passes into the diagonal mini goal.",
    "pts": "• Call \"Bounce!\" to trigger a 1-touch lay-off and third-man combination.\n• Firm pass speed along the floor.",
    "prog": "• Add Give-and-Go combinations around every pole."
  },
  {
    "id": "pass_5",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: 4-Line Through the Thirds Circuit",
    "age": "U10-U18",
    "dims": "30x15 yds | Groups of 6",
    "obj": "Timing of movement off poles and receiving on the back foot to play through 4 vertical lines.",
    "rules": "1. 4 poles in a vertical staggered line (A -> B -> C -> D).\n2. Central players B and C start on the poles, then time their lateral movement away.\n3. A plays 1-2 with B -> A passes to C -> C sets back for B -> B plays final pass to D.",
    "pts": "• Do not step off the pole until the ball has broken the previous line.\n• Pass and receive with the back foot.",
    "prog": "• Allow free decision-making on whether to turn or bounce 1-touch."
  },
  {
    "id": "pass_6",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: Side Diamond Box-to-Box Circuit",
    "age": "U11-U18",
    "dims": "30x25 yds | 2 Balls",
    "obj": "Winger timing into the half-space to set the Central Midfielder (CM) to break lines into the Forward.",
    "rules": "1. Start with 2 balls in opposite corners with Centre Backs (CB).\n2. CB steps in and passes into the Half-Space for Winger (W) coming off the line.\n3. W sets 1-touch for CM stepping past the pole -> CM plays to Forward (F) -> 1-2 return to CM -> CM passes to opposite CB.",
    "pts": "• Right Winger sets with right foot so RCM receives on left (back) foot; Left Winger sets with left foot.\n• CM takes first touch forward to break the pole line.",
    "prog": "• Add a passive defender tracking the Winger into the half-space."
  },
  {
    "id": "pass_7",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: 1-Touch Overlap & Directional Control",
    "age": "U11-Senior",
    "dims": "30x30 yds | 2 Sides",
    "obj": "Take a directional first touch inside past a mannequin to clear the flank for a 1-touch pass to the overlapping runner.",
    "rules": "1. Player A passes to B and makes an outside overlapping run.\n2. B takes a directional first touch INSIDE through a cone gate (away from mannequin) and passes to C.\n3. C takes an outside touch and plays 1-touch into the path of overlapping Player A.",
    "pts": "• Directional first touch with the back foot sets up the entire combination.\n• Synchronise the overlap timing with C's lay-off.",
    "prog": "• Run simultaneously on both left and right sides."
  },
  {
    "id": "pass_8",
    "cat": "PASSING",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Passing: Second-Option Triangle Grid",
    "age": "U11-U18",
    "dims": "Half Pitch | Triangle Cones",
    "obj": "Look past the nearest teammate (\"First Option\") to ping a ground pass through a triangle to the \"Second Option\" player.",
    "rules": "1. Set up a network of cones 10 yards apart forming triangles; play with 3-4 balls and 2 blockers.\n2. First Option = nearest teammate. Second Option = teammate arriving beyond the first triangle.\n3. Check away (\"go-to-show\"), signal which foot you want the pass to, and play 2-touch.",
    "pts": "• Ping second-option passes firmly along the ground.\n• If a player doesn't receive within 3 seconds, rotate to a new cone.",
    "prog": "• Move to a Position-Specific Dual Goal Circuit."
  },
  {
    "id": "pass_9",
    "cat": "PASSING",
    "tpl": "dutch_endzone",
    "pitch": "ssg",
    "title": "Technical: Directional First Touch & End-Zones",
    "age": "U9-U13",
    "dims": "25x35 yds | 2 End Zones",
    "obj": "Cushion the ball and take a directional first touch into space to pass or receive inside the End Zone.",
    "rules": "1. Warm up in pairs passing through a 1-yard cone gate (2 touches: directional control left/right + pass back).\n2. Progress to a 4v4 Game with 2 End Zones: score 1 point by passing to a teammate who controls the ball cleanly inside the End Zone against 1 defender.",
    "pts": "• Scan early so you know where the space is before the ball arrives.\n• Receive with the inside of the back foot.",
    "prog": "• Require the receiver to take their first touch past the defender inside the End Zone."
  },
  {
    "id": "pass_10",
    "cat": "PASSING",
    "tpl": "dutch_1v1",
    "pitch": "ssg",
    "title": "Technical: 1v1 Scissor Step-Over Duel + GK",
    "age": "U9-U13",
    "dims": "8x20 yds (3 Zones) + Goal",
    "obj": "Master the Scissor (in-to-out step-over) to wrong-foot a frontal defender and accelerate away to score.",
    "rules": "1. Attacker dribbles into the central zone against a defender (starts passive -> 50% -> 100% live).\n2. Step over the ball diagonally with the right foot (feinting right), then take the ball away with the outside of the left foot and shoot past the GK!",
    "pts": "• Execute the Scissor ~2-3 yards in front of the defender.\n• Bend the knees, drop the shoulder, and explode away after the touch.",
    "prog": "• Progress to a 5v5 SSG where goals scored after a Scissor count triple."
  },
  {
    "id": "pass_11",
    "cat": "PASSING",
    "tpl": "dutch_endzone",
    "pitch": "ssg",
    "title": "Technical: 180° Chop Turn & 4v4 End-Zones",
    "age": "U9-U13",
    "dims": "20x40 yds | End Zones",
    "obj": "Shield the ball with the standing leg and execute a 180° inside/outside foot Chop to escape pressure.",
    "rules": "1. Warm up in an 8-Cone Circle dribbling to the centre cone, executing a 180° Chop, and accelerating back.\n2. Play 4v4 with End Zones: to score a goal, a player must receive inside the End Zone and execute a 180° Chop away from the tracking defender!",
    "pts": "• Plant the standing leg beside the ball, bend the knee, and chop across the body while shielding.",
    "prog": "• 1v1 Duel in 3 zones where defender counters into a mini goal if they win it."
  },
  {
    "id": "pass_12",
    "cat": "PASSING",
    "tpl": "dutch_endzone",
    "pitch": "ssg",
    "title": "Technical: Chop Back-Heel (Cruyff Turn) Game",
    "age": "U9-U13",
    "dims": "20x40 yds | Circle & 4v4",
    "obj": "Use a fake-shot / back-heel chop behind the standing leg to lose a defender and change direction 90°-180°.",
    "rules": "1. Circle Game: 6 players with balls dribble across a 15yd circle to 6 \"home\" cones guarded by defenders -> use the Chop Back-Heel to beat the defender.\n2. 4v4 End-Zone SSG: dribble across the end-zone line and execute a Chop Back-Heel against the recovering defender to score!",
    "pts": "• Plant the standing foot ahead of the ball, fake a shot/pass, and chop the ball behind the standing leg.",
    "prog": "• Perform on the Coach's whistle in tight spaces."
  },
  {
    "id": "pass_13",
    "cat": "PASSING",
    "tpl": "ssg_multigoal",
    "pitch": "ssg",
    "title": "Technical: 90° Sole Turn 2v2 Duel Game",
    "age": "U9-U13",
    "dims": "15x20 yds | 2v2 (2 Balls)",
    "obj": "Roll the ball back with the sole of the foot while opening the hip 90° to step away from a defender.",
    "rules": "1. Warm up in a 5x5 yd square: roll the ball back with the sole, turn 90°, and pass to the next corner.\n2. Play 2v2 Duel Game (with 2 balls simultaneously!) to 2 mini goals: if a player scores directly after a 90° Sole Turn, the goal counts triple!",
    "pts": "• Roll the ball back with the sole away from the defender, keep your body between ball and opponent, and push away.",
    "prog": "• Progress to a 5v5 SSG with large goals."
  },
  {
    "id": "pass_14",
    "cat": "PASSING",
    "tpl": "dutch_1v1",
    "pitch": "ssg",
    "title": "Technical: 1v1 Elastic Flip-Flap & V-Move Duels",
    "age": "U10-U14",
    "dims": "8x20 yds | 1v1 + Bounce",
    "obj": "Drag the ball inside with the inside of the foot (dropping the shoulder), then flick it outside with the same foot.",
    "rules": "1. Attacker dribbles into the central zone against a live defender.\n2. Add a 1-touch bounce teammate on the sideline (attacker can either use the Elastic Drag / V-Move to beat the defender 1v1 OR play a 1-2 wall pass)!\n3. Finish past the GK; defender counters into 2 mini goals.",
    "pts": "• Retain continuous contact with the ball from inside-foot drag to outside-foot flick ~4 yards from the defender.",
    "prog": "• Run a 4-Mini-Goal 1v1 V-Move Duel where V-Move goals count triple."
  },
  {
    "id": "rondo_1",
    "cat": "RONDOS",
    "tpl": "rondo_4v2",
    "pitch": "ssg",
    "title": "Rondo: 4v2 Find the Free Player",
    "age": "U9-Senior",
    "dims": "8x8 yds | 1-Touch",
    "obj": "1-touch angles on the perimeter and coordinated 2-player pressing to close passing lines.",
    "rules": "1. 4 outside players (1 on each side of an 8x8 yd square) vs 2 inside defenders.\n2. Strictly 1-touch for outside players.\n3. Player who loses the ball swaps with the defender who won it.",
    "pts": "• Keep count of consecutive passes aloud to drive competitiveness.\n• Defenders curve their press to cut off the split pass.",
    "prog": "• Make the grid 7x7 yds to increase speed of thought."
  },
  {
    "id": "rondo_2",
    "cat": "RONDOS",
    "tpl": "rondo_4v2_1",
    "pitch": "ssg",
    "title": "Rondo: 4v2 (+1 Central Pivot Floater)",
    "age": "U11-Senior",
    "dims": "8x8 to 10x10 yds",
    "obj": "Use the sole of the foot to invite pressure and play through the central floating pivot.",
    "rules": "1. 4 outside players + 1 central Floater (FL) vs 2 defenders.\n2. Outside players use 1-2 touches to maintain possession with the Floater.\n3. When defenders win the ball, the last 2 attackers who touched it go into the middle.",
    "pts": "• Stop the ball with the sole of the foot to freeze defenders.\n• Central Floater positions in the gap between the 2 defenders (\"in the shadow\").",
    "prog": "• Limit the central Floater to 1 touch."
  },
  {
    "id": "rondo_3",
    "cat": "RONDOS",
    "tpl": "rondo_6v2",
    "pitch": "ssg",
    "title": "Rondo: 6v2 (+1 Floater) Breaking Lines",
    "age": "U11-Senior",
    "dims": "8x10 yds | 1-2 Touch",
    "obj": "Create constant 3-player triangles around a central link player against 2 defenders.",
    "rules": "1. 6 perimeter players + 1 central Floater vs 2 defenders.\n2. Perimeter players use 1 touch (2 max); Floater links play from side to side.\n3. Last 2 players to touch the ball before a turnover swap with the 2 defenders.",
    "pts": "• Never stand flat; constantly slide along the perimeter to open a diagonal line to the Floater.",
    "prog": "• Reward split passes through the 2 defenders with 2 points."
  },
  {
    "id": "rondo_4",
    "cat": "RONDOS",
    "tpl": "rondo_8v2",
    "pitch": "ssg",
    "title": "Rondo: 8v2 High-Tempo 1-Touch Square",
    "age": "U10-Senior",
    "dims": "10x10 yds | 1-Touch",
    "obj": "Rapid 1-touch ball speed and pressing in pairs to win within 10 passes.",
    "rules": "1. 8 outside players (2 on each side, 1-touch) vs 2 inside defenders.\n2. If the 2 defenders win the ball within the first 10 passes, BOTH swap out.",
    "pts": "• Crisp 1-touch passes; never let the ball bounce.\n• Defenders hunt in a coordinated pair.",
    "prog": "• Add a central Floater (8+1 v 2) in a 10x12 yd area."
  },
  {
    "id": "rondo_5",
    "cat": "RONDOS",
    "tpl": "rondo_6v2",
    "pitch": "ssg",
    "title": "Rondo: 6v2 End-to-End Corridor",
    "age": "U11-Senior",
    "dims": "5x15 yds | 1-Touch",
    "obj": "Transfer the ball end-to-end in a narrow corridor while 2 defenders shift relentlessly.",
    "rules": "1. 5x15 yd rectangle: 1 player on each short end, 2 on each long side (6v2).\n2. Outside players use 1 touch to work the ball from one end player to the other.\n3. Defenders must sprint end-to-end to press.",
    "pts": "• Side players constantly slide up and down to create diagonal triangles for the end players.",
    "prog": "• Play 4-Team 2+2+2 v 2 where the pair that loses the ball goes in."
  },
  {
    "id": "rondo_6",
    "cat": "RONDOS",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Possession: 3v3 (+2) Play Inside & Outside",
    "age": "U10-U16",
    "dims": "15x10 to 25x18 yds",
    "obj": "Possession with a purpose: always maintain a short, medium, and long passing option.",
    "rules": "1. 3v3 inside the grid with 2 Jokers (1 on each end or 1 end + 1 middle).\n2. Team in possession (5v3) transfers the ball from one end to the other along the ground.",
    "pts": "• Play your position; let the ball come to you.\n• Always form a triangle/diamond so short, medium, and long options exist.",
    "prog": "• Extra point for playing through the central Joker."
  },
  {
    "id": "rondo_7",
    "cat": "RONDOS",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Possession: 4v4 (+3) Positional Roles Grid",
    "age": "U12-Senior",
    "dims": "20x25 yds | 2-Touch",
    "obj": "Scan before receiving so the 2 DMs and 2 Wingers link seamlessly with LB, RB, and AM.",
    "rules": "1. 4 Blue (2 DMs, LW, RW) vs 4 Red inside, supported by 3 Yellow Neutrals (LB, RB, AM).\n2. Maintain positional roles while circulating possession.\n3. If Red wins the ball, they swap with Blue and use the 3 Yellow Neutrals.",
    "pts": "• Scan the pitch before the ball arrives.\n• 2-touch maximum with firm passing weight.",
    "prog": "• Expand to 6v6(+4) or 7v7(+2)+GKs end-to-end positional possession."
  },
  {
    "id": "rondo_8",
    "cat": "RONDOS",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Possession: 7v3 Double Square Switching",
    "age": "U11-Senior",
    "dims": "25x25 yds (Inner Square)",
    "obj": "Use 2 central link players inside an inner square to escape pressure and switch play.",
    "rules": "1. 5 Red players on the perimeter + 2 Red link players locked inside a central blue square vs 3 White defenders (7v3).\n2. Defenders cannot enter the central square.\n3. Score 1 point for 10-15 passes OR by playing through the 2 central players to switch from one side to the far side.",
    "pts": "• Outside players use 1 touch; central square players take at least 1 touch to scan and switch.",
    "prog": "• Progress to 4(+4)v4 End-to-End Rhombus Possession."
  },
  {
    "id": "rondo_9",
    "cat": "RONDOS",
    "tpl": "barca_4corner",
    "pitch": "ssg",
    "title": "Possession: 4v4 (+4) 4-Corner Diagonal Switch",
    "age": "U11-Senior",
    "dims": "30x30 yds | 4 Corner Zones",
    "obj": "Always provide at least 3 passing options (triangles/rhombuses) for the player on the ball to switch play.",
    "rules": "1. 4v4 inside a 30x30 yd grid with 4 Neutrals in corner boxes (3-second time limit).\n2. Complete 2+ internal passes and transfer the ball from one Corner Neutral to the diagonally opposite Corner Neutral = 1 point.",
    "pts": "• Constant off-ball movement to form a diamond around the Corner Neutral in possession.",
    "prog": "• Progress to 8v8 (+2 Wide Neutrals) Side-Zone Switching Game."
  },
  {
    "id": "rondo_10",
    "cat": "RONDOS",
    "tpl": "barca_3zone",
    "pitch": "ssg",
    "title": "Possession: 3-Zone 2v2v2 Pivot Entry",
    "age": "U10-U16",
    "dims": "16x16 yds (3 Equal Zones)",
    "obj": "Pass across a central defending zone and time a pivot run into the middle zone to link play.",
    "rules": "1. 16x16 yd grid divided into 3 zones: 2 Maroon attackers in Zone 1, 2 Maroon attackers in Zone 3, and 2 Blue defenders in the central Zone 2.\n2. Attackers exchange passes across the central zone (10 passes = 1 pt).\n3. Allow 1 attacker at a time to drop into the central zone to receive, pivot, and pass to the far zone!",
    "pts": "• Disguise and crisp ground passes through the central defending pair.",
    "prog": "• Expand to 35x35 yds with 6 perimeter attackers passing into 1v2 internal zones."
  },
  {
    "id": "rondo_11",
    "cat": "RONDOS",
    "tpl": "ssg_multigoal",
    "pitch": "ssg",
    "title": "Possession: 7v7 Internal Pole Gates Game",
    "age": "U11-Senior",
    "dims": "35x25 yds | Pole Gates",
    "obj": "Maintain possession and score by threading passes to a teammate through internal pole gates.",
    "rules": "1. 7v7 inside the grid scattered with 1-yard pole gates.\n2. Score 1 goal each time a player passes through a pole gate to a teammate receiving on the other side.\n3. Immediate counter-press on turnover.",
    "pts": "• Pass and move into the next open gate window.\n• Defenders must protect the gates while pressing the ball.",
    "prog": "• Add 2 end-zone target players (1 per team) at opposite ends."
  },
  {
    "id": "rondo_12",
    "cat": "RONDOS",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Possession: 2(+8)v4 Advance Through Pressure Rondo",
    "age": "U11-U18",
    "dims": "25x25 yds (20x20 Inner)",
    "obj": "8 perimeter players thread passes through 2 central pivots outnumbered 2v4 inside.",
    "rules": "1. 8 Blue outside players + 2 Blue central players vs 4 Red defenders inside the 20x20 central square.\n2. Outside players score 1 point every time they transfer the ball from one side to the other VIA one of the 2 central players (1-touch bounce).\n3. If Red wins the ball, they aim for 8 passes inside the square.",
    "pts": "• Central 2 players are outnumbered 2v4, so they must check away, scan, and bounce 1-touch passes.",
    "prog": "• Progress to 6(+4)v4 Rotating Corner Players Possession."
  },
  {
    "id": "rondo_13",
    "cat": "RONDOS",
    "tpl": "rondo_5v2",
    "pitch": "ssg",
    "title": "Possession: 5v3 Narrow Corridor Retention",
    "age": "U9-U13",
    "dims": "8x25 yds | 5v3",
    "obj": "Maintain possession in a narrow corridor using depth and width against 3 defenders.",
    "rules": "1. 5 Orange attackers vs 3 Blue defenders in an 8x25 yd grid.\n2. 10 consecutive passes = 1 point for attackers.\n3. Defenders score 1 point by winning the ball and dribbling/passing out of the grid (swap roles after 3 points).",
    "pts": "• Use the full 25-yard length with 1 player at each end and 1 central link player.",
    "prog": "• Adjust width to make it easier or harder for the attackers."
  },
  {
    "id": "build_1",
    "cat": "BUILDUP",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Formation: Positional Rhombus Build-Up Circuit",
    "age": "U13-Senior",
    "dims": "35x25 yds | Positional",
    "obj": "Synchronise the movements of CB, LB, RB, DM, LCM, RCM, and F in a double-rhombus structure.",
    "rules": "1. Players occupy exact positional cones: CB, LB, RB, DM in lower rhombus; LCM, RCM, F in upper rhombus.\n2. LB -> CB -> DM -> RB -> double 1-2 with CB -> switch to LB -> DM -> LCM -> F lay-off to oncoming DM.\n3. All players continuously shift in sync with the ball.",
    "pts": "• When RB drives forward and turns back, all other players synchronise their drop movement.\n• Crisp 1-2 touch rhythm.",
    "prog": "• Progress to 1-touch faster combinations with switches."
  },
  {
    "id": "build_2",
    "cat": "BUILDUP",
    "tpl": "rdz_244",
    "pitch": "full",
    "title": "Build-Up: 2-4-4 \"Bait the Press\" & 3rd-Man Bounce",
    "age": "U13-Senior",
    "dims": "Full / Half Pitch",
    "obj": "Invite the opposition press with sole control, then break two lines via a Third-Man Link bounce pass.",
    "rules": "1. 2-4-4 shape: GK + 2 CBs, 2 FBs level with 2 DMs (Double Box), and 4 high attackers pinning the back 4.\n2. CBs hold the ball with the sole of the boot to bait the front 2 pressers.\n3. DMs stay in the cover shadow behind the pressers; CB passes past midfield into dropping AM/F, who bounces 1-touch to the free DM.",
    "pts": "• Never play the pass until the opponent commits to pressing.\n• High wingers pin the fullbacks to guarantee a 6v4 central overload.",
    "prog": "• Adjust to 2-3-5 shape and play wide when the centre is condensed."
  },
  {
    "id": "build_3",
    "cat": "BUILDUP",
    "tpl": "rdz_244",
    "pitch": "full",
    "title": "Build-Up: Goal-Kick 4-2-4 Central 4v2 Overload",
    "age": "U13-Senior",
    "dims": "Full / Half Pitch",
    "obj": "Build from goal kicks using a 4(+GK)v2 deep overload to release a 4v2 central box overload.",
    "rules": "1. FBs start deep and narrow alongside CBs; 2 DMs stand directly behind the 2 opposing strikers.\n2. GK plays short to CB to bait the striker -> CB plays diagonally to the far-side DM dropping slightly -> 1-touch forward to the 2nd DM.\n3. Attack the 4v2 central box (2 DMs + AM + F vs 2 opposing CMs).",
    "pts": "• Opposing CBs are pinned by our high Wingers, leaving a 4v2 overload in midfield.\n• If opposing CBs step up to mark AM/F, play 1-2 lay-off and launch RB/Winger into space behind.",
    "prog": "• Bait press to one side, pass back to GK, and hit a long diagonal switch to the weak-side FB."
  },
  {
    "id": "build_4",
    "cat": "BUILDUP",
    "tpl": "wide_3v3_gk",
    "pitch": "half",
    "title": "Build-Up: 5+GK v 2 Bait the Press & Advance",
    "age": "U12-Senior",
    "dims": "Half Pitch (2 Central Zones)",
    "obj": "Read whether the opposing striker presses high or drops off to cover the DM, and advance accordingly.",
    "rules": "1. GK + Back 4 + 1 DM vs 2 pressing forwards.\n2. SCENARIO A (Striker presses LCB): LCB plays to LB -> diagonal inside pass to advancing RCB who drives across the halfway line.\n3. SCENARIO B (Striker drops onto DM): RCB drives forward with the ball into Zone 2 until engaged, then switches to LCB -> LB -> RCB.",
    "pts": "• Centre backs must be brave to carry the ball forward into empty space until an opponent commits.",
    "prog": "• Progress to 8+GK v 6 full build-up through first and second lines of pressure."
  },
  {
    "id": "build_5",
    "cat": "BUILDUP",
    "tpl": "wide_3v3_gk",
    "pitch": "half",
    "title": "Build-Up: Throw-In Decoy Drop & CB Drive (8+GK v 6)",
    "age": "U13-Senior",
    "dims": "Half Pitch | Throw-In Build",
    "obj": "Clear central space from a sideline throw-in so the far-side Centre Back can receive and drive forward.",
    "rules": "1. Left Back (LB) takes throw-in to DM (marked from behind) -> DM bounces back to LB.\n2. Left Centre Back (LCB) makes a deep decoy drop toward his own goal to drag the opposing striker away.\n3. LB passes inside into the huge central space for the Right Centre Back (RCB), who drives forward and links with F and RCM.",
    "pts": "• Selfless decoy drop by the near-side CB opens the central highway for the far-side CB.",
    "prog": "• Practice from both Left and Right side throw-ins."
  },
  {
    "id": "build_6",
    "cat": "BUILDUP",
    "tpl": "rdz_5v3",
    "pitch": "ssg",
    "title": "Build-Up: 5v3 Central Triangle to Mini Goals",
    "age": "U12-Senior",
    "dims": "30x25 yds + Finish Zone",
    "obj": "Use the CB-DM-CB triangle to manipulate 3 opposing midfielders and break lines into LCM/RCM.",
    "rules": "1. 2 CBs + DM + LCM + RCM (5) vs 3 defenders.\n2. Circulate via the CB-DM-CB triangle until a passing lane opens to LCM or RCM.\n3. Receiver dribbles into the Finish Zone to score in the mini goals.",
    "pts": "• Patience in the CB-DM-CB triangle to unbalance the 3-man midfield block.",
    "prog": "• Expand to 10v6(+4) Positional Build-Up with \"Winger Only\" wide zones."
  },
  {
    "id": "build_7",
    "cat": "BUILDUP",
    "tpl": "trans_3zone",
    "pitch": "full",
    "title": "Build-Up: 3-Zone 10v9 Overload Progression",
    "age": "U13-Senior",
    "dims": "Full Pitch (3 Zones)",
    "obj": "Progress from a 6(+1)v4 overload in Zone 1, through a 4v5 in Zone 2, to finish through 3 pole gates in Zone 3.",
    "rules": "1. Zone 1: 6v4 (AM can drop in to make 7v4). Zone 2: 4v5. Zone 3: 3 yellow scoring gates.\n2. Build through Zone 1 into the Forward (F) in Zone 2 -> F lays off to DM/AM.\n3. Once in Zone 2, all Zone 1 players (except CBs) surge forward to play a runner through into Zone 3.",
    "pts": "• Timing of the Forward's lay-off in Zone 2 and the deep overlapping run of the Fullback into Zone 3.",
    "prog": "• If defenders win the ball, they counter-attack into 3 red pole gates at the top of Zone 1."
  },
  {
    "id": "build_8",
    "cat": "BUILDUP",
    "tpl": "wide_3v3_gk",
    "pitch": "half",
    "title": "Build-Up: 3v3 Wide Goal-Kick Unblocking",
    "age": "U12-Senior",
    "dims": "Half Pitch (Wide Channel)",
    "obj": "Unlock man-to-man 3v3 pressing on goal kicks using the Winger dropping deep as a decoy or bounce player.",
    "rules": "1. GK passes to CB who carries forward.\n2. Ex A (FB blocked, DM marked): Winger drops to receive from CB and bounces 1-touch to advancing FB.\n3. Ex B (DM blocked, FB marked): Winger drops and bounces 1-touch inside to free DM.\n4. Ex C (Winger blocked): CB passes directly wide to free FB.",
    "pts": "• Read the opponent winger's body position to choose Solution A, B, or C instantly.",
    "prog": "• Play live 4v4 in the wide channel after the first pass."
  },
  {
    "id": "build_9",
    "cat": "BUILDUP",
    "tpl": "pep_2323",
    "pitch": "pep",
    "title": "Formation: 4-3-3 Inverted Fullbacks (2-3-2-3 Shape)",
    "age": "U13-Senior",
    "dims": "Half Pitch (2-3-2-3 Shape)",
    "obj": "Move the ball via the Inverted Fullback and DM into both Attacking Midfielders combining through the Half-Spaces.",
    "rules": "1. RCB (5) -> Inverted RB (3) -> DM (25).\n2. DM carries forward and plays diagonally into Left AM (17) in the Half-Space.\n3. Left AM (17) shifts inside and slides Right AM (21) driving through the central gap to shoot.",
    "pts": "• Inverted FBs occupy the lower Half-Spaces; Wingers stay glued to the touchline to pin the back 4.",
    "prog": "• Add Striker (10) lay-off between the two AMs."
  },
  {
    "id": "build_10",
    "cat": "BUILDUP",
    "tpl": "pep_352",
    "pitch": "pep",
    "title": "Formation: 3-5-2 Dual Striker Link & 3rd-Man Run",
    "age": "U14-Senior",
    "dims": "Half Pitch (3-5-2 Shape)",
    "obj": "Build through a Back 3 and use both Strikers (10 & 7) to set up an Attacking Midfielder's 3rd-man run.",
    "rules": "1. LCB (5) -> CB (4) -> RCB (30) -> Right AM (17) in Half-Space -> lay-off to DM (25).\n2. DM plays into Striker (10) -> 10 lays off to deeper 2nd Striker (7).\n3. Striker (7) slides Right AM (17) making a 3rd-man run in behind to square for Striker (10).",
    "pts": "• Both Wing-Backs (19 & 2) stay high and wide to pin the 5 mannequins.",
    "prog": "• Have the 2nd Striker (7) slide the weak-side AM (21) through the central gap."
  },
  {
    "id": "build_11",
    "cat": "BUILDUP",
    "tpl": "pos_end2end",
    "pitch": "ssg",
    "title": "Build-Up: Centre Back Driving into Midfield (5v4)",
    "age": "U12-Senior",
    "dims": "30x40 yds | 4v4 + 4 Defenders",
    "obj": "Centre back drives forward with the ball into the midfield zone to create a 5v4 overload and find the free man.",
    "rules": "1. 4v4 midfielders inside the main grid; 4 Defenders wait outside at the base.\n2. Coach plays to the Defenders -> 1 Defender dribbles into the midfield grid to create a 5v4 overload.\n3. Combine to find the free player, who dribbles across the end-line to shoot unopposed on goal.",
    "pts": "• CB only drives in when space ahead is open.\n• Midfielders make opposite movements to clear the lane or offer a 1-2 wall pass.",
    "prog": "• Progress to an 11v11 3-Zone SSG where 1 defender steps into the central 3v3 zone."
  },
  {
    "id": "build_12",
    "cat": "BUILDUP",
    "tpl": "wide_3v3_gk",
    "pitch": "half",
    "title": "Build-Up: Breaking High Press via \"Free Player\" (8v6)",
    "age": "U13-Senior",
    "dims": "Half Pitch | Build-Up to Halfway",
    "obj": "Drop the DM between split CBs to identify and reach the \"1st & 2nd Phase Free Player\" via a Link Player.",
    "rules": "1. Coach hits a long ball to GK -> 8 Red build-up players move to their positions against 6 high-pressing White opponents.\n2. DM (16) drops between CBs (3 & 5); Fullbacks (2 & 22) push high; No. 10 drops as a link player.\n3. Identify which player is left unmarked by the 6 pressers, use a \"Link Player\" to bounce the ball to the \"Free Player\", and dribble over the halfway line.",
    "pts": "• If opponents press the CBs & DM, the Fullback or AM is the Free Player — use No. 10 as the Link Player to reach them!",
    "prog": "• Practice with a 4v4(+4) \"Yellow Bib Target Player\" game."
  },
  {
    "id": "build_13",
    "cat": "BUILDUP",
    "tpl": "wide_3v3_gk",
    "pitch": "half",
    "title": "Build-Up: \"Drop & Split\" 5-Option Goal Kick",
    "age": "U12-U18",
    "dims": "Half Pitch | 9+GK v 6",
    "obj": "Create 5 simultaneous passing outlets for the Goalkeeper by having the 2 CBs drop while 2 AMs split and the DM arcs in.",
    "rules": "1. GK positions the ball centrally on the 6-yard line; FBs push high and wide.\n2. TRIGGER: As GK looks up, the 2 CBs (5 & 6) drop back toward the 18-yard corners (drawing the 2 opposing strikers).\n3. Simultaneously, DM (4) arcs into the vacated central space while the 2 AMs (8 & 10) split wide into the channels!",
    "pts": "• Gives the GK 5 clear ground options (2 CBs, 1 DM, 2 AMs).\n• Once AM (8) receives, Striker (9) makes a selfless decoy run to open the channel for Winger (11).",
    "prog": "• Also practice the \"Centre Backs Tuck In & Midfield 3 Rotate\" variation."
  },
  {
    "id": "build_14",
    "cat": "BUILDUP",
    "tpl": "lamche_cut",
    "pitch": "half",
    "title": "Build-Up: \"The Cut\" Decoy Run & Midfield 3 Rotation",
    "age": "U12-U18",
    "dims": "Half Pitch | 2 Halfway Gates",
    "obj": "Combine the CB's decoy diagonal run (\"The Cut\") with the FB dropping down the line and the Midfield 3 rotating.",
    "rules": "1. CB (6) tucks in, calls \"Cut!\", and makes a diagonal run across the pressing striker.\n2. If tracked, Right Back (2) drops down the touchline to receive from GK.\n3. RB (2) pings a diagonal pass into the pocket for the rotating Midfielder (8), who bounces 1-touch wide to Winger (7) to dribble through the halfway gates.",
    "pts": "• If the striker does NOT track the CB's cut run, GK plays directly into the CB driving into midfield!\n• If closed down on the right, play back to GK in his \"Safe Zone\" beside the post to switch left.",
    "prog": "• If the 5 defenders win the ball, they have 10 seconds to score."
  },
  {
    "id": "att_1",
    "cat": "ATTACKING",
    "tpl": "pep_2323",
    "pitch": "pep",
    "title": "Attacking: Switch to Winger & FB Underlap/Overlap",
    "age": "U13-Senior",
    "dims": "Half Pitch (10v0 Pattern)",
    "obj": "Switch play from strong side to weak-side Winger with synchronised Fullback underlapping or overlapping runs.",
    "rules": "1. RB -> RCM -> back to DM -> diagonal pass to LCM -> wide to high Left Winger (LW).\n2. VARIATION A: LW holds width and slides Left Back (LB) on an inside UNDERLAPPING run into the box.\n3. VARIATION B: LW drives inside at the fullback mannequin and slides LB on an outside OVERLAPPING run for a cut-back.",
    "pts": "• Fullback reads the Winger's first touch: Winger stays wide = FB underlaps; Winger drives inside = FB overlaps.",
    "prog": "• Add 5v2 Wide Zones with 2 live wide defenders."
  },
  {
    "id": "att_2",
    "cat": "ATTACKING",
    "tpl": "wave_3v2",
    "pitch": "half",
    "title": "Attacking: Flank Triangle & FB 3rd-Man Cut-Back",
    "age": "U12-Senior",
    "dims": "Half Pitch | Finishing",
    "obj": "Execute a fast 3-player flank triangle (DM -> RW -> AM) to release the Fullback's deep third-man run into the box.",
    "rules": "1. DM passes wide to Right Winger (RW) checking off his cone.\n2. RW plays inside (1-2 touches) to Attacking Midfielder (AM).\n3. AM threads a first-time through-ball between the 2 mannequins for Right Back (RB) sprinting from deep.\n4. RB cuts the ball back to the penalty spot for the Striker (F) to finish.",
    "pts": "• Timing of RB's sprint: start the run as the ball leaves DM's foot toward RW.\n• Cut-back accuracy into the penalty spot.",
    "prog": "• Practice on both right and left flanks."
  },
  {
    "id": "att_3",
    "cat": "ATTACKING",
    "tpl": "pep_2323",
    "pitch": "pep",
    "title": "Attacking: Half-Space Receive & Winger Cut-Back",
    "age": "U13-Senior",
    "dims": "Half Pitch (2-3-2-3 Shape)",
    "obj": "Receive in the Half-Space and slide the high Winger in behind for a low cut-back across the 6-yard box.",
    "rules": "1. RCB -> Inverted RB -> DM -> Striker (10) dropping short -> lays off to Left AM (17) in the Half-Space.\n2. AM (17) slides Left Winger (19) in behind the mannequin backline -> low cut-back for Striker (10), Right AM (21), and Far-Post Winger (7).",
    "pts": "• Always arrive in the box with 3 runners: Near Post (10), Penalty Spot (21), and Far Post (7).",
    "prog": "• DM hits a direct diagonal aerial pass from the Half-Space over the fullback to the opposite Winger."
  },
  {
    "id": "att_4",
    "cat": "ATTACKING",
    "tpl": "pep_2323",
    "pitch": "pep",
    "title": "Attacking: Striker \"Dummy\" Step-Over for AM Run",
    "age": "U13-Senior",
    "dims": "Half Pitch (4-3-3 Shape)",
    "obj": "Use the Striker's step-over dummy to deceive centre backs and release the weak-side Attacking Midfielder.",
    "rules": "1. LCB -> RCB -> Right AM (17) in Half-Space -> lay-off to curving DM (25).\n2. DM plays a firm vertical pass into Striker (10).\n3. Striker (10) steps over the ball (\"dummy\") allowing Left AM (21) making a blind-side 3rd-man run to burst through and score!",
    "pts": "• Disguise on the DM's pass and verbal call (\"Leave it!\") from the third-man runner.",
    "prog": "• Striker plays a 1-touch flick around the corner instead of a dummy if closely tracked."
  },
  {
    "id": "att_5",
    "cat": "ATTACKING",
    "tpl": "pep_2323",
    "pitch": "pep",
    "title": "Attacking: Weak-Side Switch via Half-Spaces",
    "age": "U12-Senior",
    "dims": "Half Pitch (4-3-3)",
    "obj": "Draw the opponent to one side, circulate through the DM and Striker, and release the weak-side Winger or AM.",
    "rules": "1. RB (2) -> RCB (5) -> skips LCB directly to LB (3) -> Left AM (10) in Half-Space -> DM (6).\n2. DM plays into Striker (9) -> lay-off to Right AM (8) in opposite Half-Space.\n3. No. 8 slides Right Winger (7) in behind to cross.",
    "pts": "• Skipping the near CB accelerates the switch of play before the defense can shift.",
    "prog": "• Use a long diagonal switch from Left AM (10) directly to Right Winger (7) isolating the 1v1."
  },
  {
    "id": "att_6",
    "cat": "ATTACKING",
    "tpl": "lamche_x",
    "pitch": "half",
    "title": "Attacking: 4-Player Flank Combination & Cross",
    "age": "U11-Senior",
    "dims": "Half Pitch (Flank Channel)",
    "obj": "Synchronise Fullback, Winger, Striker, and Attacking Midfielder in a 4-player flank triangle.",
    "rules": "1. FB (2) plays a 1-2 down the line with Winger (7).\n2. FB (2) plays inside to Striker (9) -> 9 lays off to Attacking Midfielder (8) and spins toward the near post.\n3. No. 8 threads a through-ball high up the flank for Winger (7) to cross first-time to Striker (9).",
    "pts": "• Practice on both Left (3-11-9-10) and Right (2-7-9-8) flanks.\n• High ball speed and 1-touch lay-offs.",
    "prog": "• Add agility hurdles and slalom poles before each player's movement."
  },
  {
    "id": "att_7",
    "cat": "ATTACKING",
    "tpl": "pep_352",
    "pitch": "pep",
    "title": "Attacking: 3-5-2 Consolidate & Diagonal Aerial Chip",
    "age": "U14-Senior",
    "dims": "Half Pitch (3-5-2 Shape)",
    "obj": "Consolidate possession with short 1-2s in midfield to draw defenders out, then chip aerially over the backline.",
    "rules": "1. Back 3 -> Striker (7) in Half-Space -> lay-off to AM (17) -> 1-2 with DM (25).\n2. Switch inside to Left AM (21) who plays wide to Wing-Back (19) and receives the return pass in the Half-Space.\n3. Left AM (21) chips a short diagonal aerial pass over the mannequins for Striker (7) or far Wing-Back (2) running in behind.",
    "pts": "• Multiple short lay-offs pull the defensive line 2 yards forward, creating the space behind for the aerial chip.",
    "prog": "• Execute the aerial chip to the far-post Wing-Back arriving on the blind side."
  },
  {
    "id": "att_8",
    "cat": "ATTACKING",
    "tpl": "pep_352",
    "pitch": "pep",
    "title": "Attacking: Wing-Back & AM Underlap Give-and-Go",
    "age": "U13-Senior",
    "dims": "Half Pitch (3-5-2 Shape)",
    "obj": "Pass wide to the Wing-Back to pull the opposing fullback out, opening the inside channel for the AM's underlap.",
    "rules": "1. LCB -> CB -> DM -> RCB -> Right AM (17) -> lay-off to DM (25).\n2. DM passes wide to advanced Right Wing-Back (2).\n3. Right AM (17) immediately makes an inside UNDERLAPPING run between the FB and CB mannequins to receive the return pass from Wing-Back (2) and cut it back.",
    "pts": "• Underlapping run into the Half-Space reaches the byline inside the opposing fullback.",
    "prog": "• Practice double 1-2 combinations on both left and right flanks."
  },
  {
    "id": "att_9",
    "cat": "ATTACKING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Attacking: 3rd-Man Aerial Pass & 2-Touch Finish",
    "age": "U12-Senior",
    "dims": "35x25 yds | Finishing",
    "obj": "Combine quickly in a triangle and hit a timed aerial pass over mannequins for a 2-touch (control + shoot) finish.",
    "rules": "1. Player A passes diagonally to D (dropping off mannequins).\n2. D lays off to B.\n3. B takes 1 touch to control and hits an aerial pass over the mannequins for C's timed 3rd-man run.\n4. C uses 2 touches (1 to control, 1 to shoot past GK).",
    "pts": "• Strictly 2 touches for Passer B and Finisher C to enforce match-speed execution.",
    "prog": "• Alternate from left and right sides."
  },
  {
    "id": "att_10",
    "cat": "ATTACKING",
    "tpl": "wave_3v2",
    "pitch": "half",
    "title": "Attacking: Central Trio Keep-Ball to 5v2 Cut-Back",
    "age": "U12-Senior",
    "dims": "Half Pitch | 5v2 Box",
    "obj": "Keep possession centrally among 3 midfielders until the cue to play wide, overlap/1-2, and finish 3v2 in the box.",
    "rules": "1. 3 Blue midfielders pass between themselves outside the box; 2 Wingers wait wide; 2 Red defenders protect the box.\n2. Midfielders play wide to a Winger and 1 midfielder supports for a 1-2 give-and-go into the box.\n3. The other 2 midfielders + far Winger sprint into the box to finish the cut-back against the 2 Red defenders.",
    "pts": "• Patience in the central trio followed by a sudden explosion of speed once the ball goes wide.",
    "prog": "• Add a recovering defensive midfielder."
  },
  {
    "id": "att_11",
    "cat": "ATTACKING",
    "tpl": "pep_2323",
    "pitch": "pep",
    "title": "Attacking: Central Diamond Pattern to Crossing Zones",
    "age": "U12-U18",
    "dims": "Half Pitch | Zone Crossing Rules",
    "obj": "Combine through the central diamond (DM-LCM-RCM-F) to release the Winger into specific crossing zones.",
    "rules": "1. DM -> RCM -> Striker (F) -> sets back for LCM -> plays wide/in-behind to Left Winger (LW) against 2 live box defenders.\n2. CROSSING ZONE RULE: If LW receives in the wide Yellow Zone, whip a cross to the front post (F) or back post (RW). If LW receives in the deeper Red Cut-Back Zone, cut the ball back to the penalty spot for LCM/RCM!",
    "pts": "• The zone where the Winger receives dictates the exact type of cross and box runs.",
    "prog": "• Winger comes inside to link play and releases the overlapping Fullback into the crossing zones."
  },
  {
    "id": "att_12",
    "cat": "ATTACKING",
    "tpl": "pep_2323",
    "pitch": "pep",
    "title": "Attacking: \"Classic 1, 2 & 3\" Wide Combinations",
    "age": "U12-U18",
    "dims": "Half Pitch | Flank Overloads",
    "obj": "Master the 3 classic flank combinations between rotating Midfielders, Winger, and overlapping/underlapping Fullback.",
    "rules": "1. CLASSIC 1: Switch to Winger (7) -> 7 plays 1-touch \"Set & Spin\" with AM (8) -> 7 drives inside while FB (2) overlaps wide.\n2. CLASSIC 2: Switch to AM (8) -> 1-2 with Winger (7) tucking inside -> 8 slides overlapping FB (2) in behind.\n3. CLASSIC 3: Switch to AM (8) -> Winger (7) stays wide -> FB (2) makes an inside UNDERLAPPING run -> plays to 10 -> slides 7 in behind!",
    "pts": "• Fullback takes his cue from the Winger: if Winger tucks in, FB overlaps outside; if Winger stays wide, FB underlaps inside!",
    "prog": "• Practice in an 8v6 Conditioned Game."
  },
  {
    "id": "att_13",
    "cat": "ATTACKING",
    "tpl": "lamche_x",
    "pitch": "half",
    "title": "Attacking: \"The X\" Flank Combination Pattern",
    "age": "U12-U18",
    "dims": "Half Pitch | Consolidation to Incision",
    "obj": "Break the opponent's midfield and defensive lines in 3 first-time passes using two crossing diagonal passes (\"The X\").",
    "rules": "1. Pass 1: Centre Back (5) hits a diagonal pass to Left Winger (11) dropping down the line.\n2. Pass 2: Winger (11) sets 1-touch back to Left Back (3) and immediately spins in behind.\n3. Pass 3: Left Back (3) hits a crossing diagonal pass inside into No. 10 (forming \"The X\"), who slides Winger (11) or overlapping FB in on goal.",
    "pts": "• Warm up with the unopposed & passive-pressure \"X Passing Grid\" before moving to the half-pitch.",
    "prog": "• Add 2 recovering defenders chasing the final pass."
  },
  {
    "id": "att_14",
    "cat": "ATTACKING",
    "tpl": "wave_3v2",
    "pitch": "half",
    "title": "Attacking: \"Open the Gate\" Set & Spin (3v2 / 4v3)",
    "age": "U12-U18",
    "dims": "20x30 yds | 3v2 & 4v3 Grids",
    "obj": "Use decoy runs (\"Open the Gate\", \"Drop-Set\", \"Back-Heel Take-Over\", and \"Nutmeg Dummy\") to carve open compact defenders.",
    "rules": "1. Play 3v2 or 4v3 in a 20x30 yd grid to a full goal.\n2. OPEN THE GATE: Striker (9) drifts wide to drag the CB and \"open the gate\" in the centre -> Winger (7) sets to AM (10) and spins into the central gate (or FB 2 underlaps through the gate)!\n3. Also explore: Rotating Drop Run, Rotating Lateral Run, Back-Heel Take-Over, and Nutmeg Dummy + Spin.",
    "pts": "• Establish eye contact and disguise intentions before executing the decoy run.",
    "prog": "• Progress to a 5v3 Central Finishing Practice with 2 Target Players."
  },
  {
    "id": "att_15",
    "cat": "ATTACKING",
    "tpl": "set_piece",
    "pitch": "half",
    "title": "Attacking: \"Lock Down the Box\" Crossing & 3s Rule",
    "age": "U11-U18",
    "dims": "Half Pitch | 4-Player Build + 3v2 Box",
    "obj": "Execute the 4-pass flank build-up and hit all 5 box zones: A (Near Post), B (Back Post), C (Penalty Spot), D (Edge of D), E (Security).",
    "rules": "1. Build-up in side box: 1 -> 2 -> 3 -> 4 -> 1-2 return to Winger (4) high on the flank.\n2. 3 Attackers (A, B, C) coordinate their runs against 2 box defenders.\n3. 3-SECOND RULE: If an attacker is in a finishing zone for 3 seconds and the cross is delayed, they MUST rotate positions with another attacker to lose their marker!",
    "pts": "• Near-post runner (A) must finish his run parallel to the near post for an easy 1-touch tap-in.\n• Goals scored using the 3 key runs count as 3 points.",
    "prog": "• Add offside rule and a 3rd box defender."
  },
  {
    "id": "press_1",
    "cat": "PRESSING",
    "tpl": "rondo_5v2",
    "pitch": "ssg",
    "title": "Pressing: 5v2 \"Win Within 6 Passes\" Rondo",
    "age": "U10-Senior",
    "dims": "10x10 yds | 1-Touch",
    "obj": "Disrupt the opponent build-up within their first 6 passes (high-intensity pressing rondo).",
    "rules": "1. 5 outside players (1-touch) vs 2 inside defenders.\n2. WIN IN 6 RULE: If the 2 defenders intercept within the first 6 passes, BOTH defenders escape the middle! After 6 passes, only 1 escapes.",
    "pts": "• Outside 5 must run non-stop to offer angles.\n• Maximum pressing aggression in the first 6 passes.",
    "prog": "• Connect two 5v2 squares: winning the ball twice triggers a sprint transition to the next square."
  },
  {
    "id": "press_2",
    "cat": "PRESSING",
    "tpl": "rondo_hunt",
    "pitch": "ssg",
    "title": "Counter-Press: 3(+3)v3 \"Hunt the Ball\" Rondo",
    "age": "U12-Senior",
    "dims": "12x12 yds | 3 Teams of 3",
    "obj": "Train the exact moment of ball loss: immediate 3-player swarm counter-pressing.",
    "rules": "1. 3 teams of 3 (Maroon, Yellow, Blue). Two teams combine (5 outside + 1 central pivot = 6v3).\n2. The 3 defenders hunt the ball in a triangle.\n3. Whichever team of 3 loses the ball immediately becomes the defending trio (zero delay!).",
    "pts": "• \"Go! Get it back! Don't stop!\"\n• Outside players must compress into the centre the instant their teammate loses the ball.",
    "prog": "• Play 4(+2)v4 in a tight 5x10 yd grid for ultra-high turnover frequency."
  },
  {
    "id": "press_3",
    "cat": "PRESSING",
    "tpl": "circle_press",
    "pitch": "full",
    "title": "Counter-Press: Centre Circle 4(+3)v4 Game",
    "age": "U12-Senior",
    "dims": "Centre Circle (10yd Radius)",
    "obj": "360-degree possession with 3 Jokers and instant counter-pressing inside the centre circle.",
    "rules": "1. 4 Maroon vs 4 Blue + 3 Yellow Jokers inside the centre circle (7v4 in possession).\n2. All players move freely using 1-2 touches.\n3. On turnover, the team that lost the ball swarms the new ball carrier before they can play to a Joker.",
    "pts": "• Surround the ball carrier in the first 2 seconds after turnover.\n• Jokers occupy different vertical and horizontal lines.",
    "prog": "• Move to a Hexagon 4(+6)v4 with 6 perimeter players."
  },
  {
    "id": "press_4",
    "cat": "PRESSING",
    "tpl": "pos_end2end",
    "pitch": "ssg",
    "title": "Counter-Press: 7(+3)v7 Positional Transition Game",
    "age": "U13-Senior",
    "dims": "25x30 yds | 7(+3)v7",
    "obj": "Full team positional structure (CBs at base, F at top, Wingers wide, 3 Joker CMs inside) with counter-pressing.",
    "rules": "1. 2 teams of 7 + 3 central Yellow Jokers (CMs).\n2. Team in possession expands to the perimeter (CBs at bottom, LB/RB/LW/RW on sides, F at top).\n3. Defending 7 press inside; when they win it, they expand outside while the other 7 compress to counter-press!",
    "pts": "• Seamless transition between wide positional structure and compact central counter-pressing.",
    "prog": "• Limit outside players to 1-2 touches."
  },
  {
    "id": "press_5",
    "cat": "PRESSING",
    "tpl": "press_trap",
    "pitch": "half",
    "title": "Pressing: Front-Foot \"Set the Trap\" Wide Press",
    "age": "U13-U18",
    "dims": "Half Pitch | 6v8+GK or 10v10",
    "obj": "Use a coordinated chain-reaction front press to force the opponent wide into a 4v4 pressing trap.",
    "rules": "1. Blue builds from GK + Back 4 + 3 Midfielders.\n2. Maroon RCM steps up to mark Blue DM, releasing Maroon Striker (9) to curve his run between the 2 CBs and force play one way.\n3. As pass goes to Blue RB, Maroon LW presses the ball, LCM marks tightly, LB steps to Blue RW, and DM covers the Striker.",
    "pts": "• First pressing trigger activates a chain reaction from behind.\n• Show opponents outside; leave the far-side opponent unmarked.",
    "prog": "• Progress to 9v9(+GKs) Diamond Midfield Pressing Game securing a 3v3 in the centre."
  },
  {
    "id": "press_6",
    "cat": "PRESSING",
    "tpl": "press_trap",
    "pitch": "half",
    "title": "Pressing: Chain-Reaction High Press & Force Wide",
    "age": "U12-Senior",
    "dims": "Half/2-3 Pitch | Side Trap Zones",
    "obj": "Shift as a compact chain-reaction unit, use the Striker's curved run to force play wide, and double-team in the side zone.",
    "rules": "1. Opponent tries to build out and score in 3 mini goals.\n2. Striker (9) curves his press on the CB to block the switch and force the pass into the Side Zone.\n3. RULE: Within 3 seconds of the ball entering a Side Zone, all pressing players must vacate the far-side zone to compress the ball side and double-mark!",
    "pts": "• Short distances between lines; leave the weak side completely empty to overload the strong side.\n• Win the ball and score within 5 passes.",
    "prog": "• Progress to 11v11 \"Pressing in 3 Stages\" with 4 zones."
  },
  {
    "id": "press_7",
    "cat": "PRESSING",
    "tpl": "press_trap",
    "pitch": "half",
    "title": "Pressing: Winger-Led Press Blocking Fullback Lane",
    "age": "U12-Senior",
    "dims": "Half Pitch | 9v10 with Side Zones",
    "obj": "When the Striker is on the weak side, the near Winger presses the CB while using his cover shadow to block the Fullback.",
    "rules": "1. GK passes to the CB on the side opposite the Striker.\n2. Near Winger curves his press onto the CB, blocking the passing lane to the opponent's Fullback in the blue side zone.\n3. Near AM steps up to mark the opponent's DM, and the Striker tucks in to double-mark in the central red zone.",
    "pts": "• Use body shape and angle of approach to press one player while screening the pass to another.",
    "prog": "• If the ball reaches the Fullback in the side zone, he has free passage until he steps out."
  },
  {
    "id": "press_8",
    "cat": "PRESSING",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "Pressing: High Press 5v3 to 2-Zone Transition",
    "age": "U11-Senior",
    "dims": "20x20 yds (2 Equal Zones)",
    "obj": "Press a 5v3 build-up with 3 forwards to force an error, play a quick 1-2, and transfer to your teammates.",
    "rules": "1. 5v3 in Zone 1 (3 inside + 2 wide vs 3 pressers). 6 passes = 1 pt; 15 seconds = 2 pts.\n2. The 3 defenders press high to force a mistake or interception (1 pt).\n3. On winning the ball, the 3 defenders play a quick 1-2 and pass across to their 2 wide teammates in Zone 2 to create a new 5v3!",
    "pts": "• Aggressive 3-player hunting angles to trap the 5v3 in a corner.\n• Immediate composure on winning the ball to execute the 1-2 and switch zones.",
    "prog": "• Progress to a 4-Zone High-Press & Fast-Attack Game with Target Players."
  },
  {
    "id": "press_9",
    "cat": "PRESSING",
    "tpl": "trans_3zone",
    "pitch": "full",
    "title": "Pressing: High Press & 6-Second 3rd-Man Counter",
    "age": "U13-Senior",
    "dims": "Full Pitch | Attacking Zone",
    "obj": "High press in the opponent's half, win the ball, and score within 6 seconds using a third-man run.",
    "rules": "1. Team A (4-3-3) builds up (2-3 touch limit). If Team B (4-2-3-1) wins it, they score points for 6 passes (1 pt) or reaching the Attacking Zone (2 pts).\n2. This forces Team A to counter-press immediately in the High Zone!\n3. If Team A wins the ball back high: Normal goal = 1 pt; Goal within 6s = 2 pts; Goal within 6s via a Third-Man Run = 3 points!",
    "pts": "• Squeeze the pitch immediately on turnover; weight the final pass into space for the third-man runner.",
    "prog": "• Also practice on a split vertical pitch (2 simultaneous 5v5+GK games)."
  },
  {
    "id": "press_10",
    "cat": "PRESSING",
    "tpl": "press_trap",
    "pitch": "half",
    "title": "Pressing: Multi-Angle High Press (2-Channel Rule)",
    "age": "U12-Senior",
    "dims": "Half Pitch (3 Vertical Channels)",
    "obj": "Close down the ball carrier from multiple angles while compressing all players into 2 adjacent vertical channels.",
    "rules": "1. Divide the high zone into 3 vertical channels (left, centre, right). Navy (2-3-3) keeps possession (8 passes = 1 pt) vs Light Blue (4-3).\n2. When Navy loses the ball, they must immediately high-press from multiple angles.\n3. 2-CHANNEL RULE: If Navy wins the ball back within 6 seconds AND all Navy players have compressed into 2 adjacent channels, they score 1 point (2 pts if they also score)!",
    "pts": "• Eliminate the opponent's numerical advantage by compressing the entire team into the 2 channels nearest the ball.",
    "prog": "• Progress to a full 11v11 game with the 6-second recovery rule."
  },
  {
    "id": "press_11",
    "cat": "PRESSING",
    "tpl": "rondo_5v2",
    "pitch": "ssg",
    "title": "Counter-Press: 6v5 Collective Press (Open & Close)",
    "age": "U11-Senior",
    "dims": "25x25 yds | 6v5",
    "obj": "Master the rhythm of \"In Possession = OPEN the Space / Out of Possession = CLOSE the Space\".",
    "rules": "1. 6 Yellow (3-3 shape using the perimeter) keep possession vs 5 Black/White inside (8 passes = 1 pt).\n2. When Black/White wins the ball, they try to dribble out of the 25x25 yd square (2 pts).\n3. All 6 Yellows must immediately collapse inward to swarm the ball carrier and prevent them escaping the square!",
    "pts": "• Instantaneous collective contraction when the ball is lost, followed by immediate expansion when recovered.",
    "prog": "• Progress to a 6v6 2-Zone Directional High-Press Game with mini goals."
  },
  {
    "id": "def_1",
    "cat": "DEFENDING",
    "tpl": "def_arc",
    "pitch": "half",
    "title": "Defending: Back 4 Compact Unit Arc",
    "age": "U12-U18",
    "dims": "Half Pitch | Back 4 Organization",
    "obj": "Train the Back 4 to compress centrally on passes to the Striker and form a \"Defensive Unit Arc\" when played wide.",
    "rules": "1. Back 4 faces 6 mannequins (2 DMs, 2 Wingers, 2 Forwards). Coach calls out mannequin colours.\n2. Call \"GREEN\" (Pass to Striker): Nearest CB steps to press; other 3 defenders tuck in tightly for cover.\n3. Call \"BLUE\" (Pass wide to Winger): Fullback sprints out to press; other 3 defenders shift across in a curved \"Defensive Unit Arc\" so the far FB doesn't play the opposite winger onside!",
    "pts": "• Keep 10-12 yard distances between defenders.\n• Travel at the speed of the ball; protect the depth (\"T-shape\").",
    "prog": "• Progress to a live 6v4(+GK) and 8v6(+GK) Phase of Play where defenders score by passing to a Target DM."
  },
  {
    "id": "def_2",
    "cat": "DEFENDING",
    "tpl": "def_arc",
    "pitch": "half",
    "title": "Defending: 1st & 2nd Phase Crosses",
    "age": "U12-U18",
    "dims": "Half Pitch | Back 4 + GK",
    "obj": "Drop off when there is no pressure on a long ball, clear high/wide, and readjust for a second-phase wide cross.",
    "rules": "1. PHASE 1: Opponent FB dribbles unpressured at the halfway line to hit a long pass -> Back 4 drops together and heads/clears high and wide.\n2. PHASE 2: Coach immediately serves a Winger on the flank -> Back 4 rapidly shifts into the Defensive Arc to defend the cross or cut-back.",
    "pts": "• No pressure on the ball = drop back; pressure on the ball = hold or step up.\n• Clearances must go high and wide or out to the target DM.",
    "prog": "• Finish with 2v3 Zonal Defensive Organization on either side of the pitch."
  },
  {
    "id": "def_3",
    "cat": "DEFENDING",
    "tpl": "def_arc",
    "pitch": "half",
    "title": "Defending: Back 4 + DM Gap Cover",
    "age": "U12-Senior",
    "dims": "Half Pitch | 5v4 to 9v10",
    "obj": "Synchronise the Defensive Midfielder (DM) dropping into the backline whenever a Fullback steps out early to press.",
    "rules": "1. Back 4 starts inside a blue defensive zone; DM starts just in front.\n2. Coach passes to an opposing midfielder who plays wide to the opposing Fullback.\n3. As our Fullback steps out of the zone during the flight of the pass to press, the DM drops into the backline to maintain a 4v3 numerical advantage!",
    "pts": "• If a large gap opens between the 2 CBs, the DM drops directly into the central CB slot.\n• If timing to step out is late, the Fullback holds and waits for the AM to track back.",
    "prog": "• Progress to a 9v10 2-Zone Game where opponents must attack through their Fullbacks."
  },
  {
    "id": "def_4",
    "cat": "DEFENDING",
    "tpl": "def_arc",
    "pitch": "half",
    "title": "Defending: Unpressured Midfielder (Open Ball)",
    "age": "U12-Senior",
    "dims": "2/3 Pitch | 8v8 Zonal",
    "obj": "When an opposing midfielder has time and space (\"Open Ball\"), drop the backline and funnel play wide.",
    "rules": "1. 2 opposing CBs pass to 2 CMs inside a central red zone.\n2. Once a CM receives facing forward with an \"Open Ball\", our 3 midfielders funnel back toward the centre to block vertical/diagonal through-balls.\n3. Simultaneously, our Back 4 + DM drop off to track forward runs in behind and force the ball carrier wide.",
    "pts": "• Never step up when the ball is uncovered (\"Open Ball\") — protect the space in behind and block central passing lanes.",
    "prog": "• Opponents score 1 pt for a through-ball into the penalty zone and 3 pts if they score past the GK."
  },
  {
    "id": "def_5",
    "cat": "DEFENDING",
    "tpl": "def_arc",
    "pitch": "half",
    "title": "Defending: Weak-Side Switch & Box Crosses",
    "age": "U12-Senior",
    "dims": "Half Pitch | 3 Vertical Zones",
    "obj": "Prevent a 2v1 on the weak side when play is switched, while maintaining numerical superiority inside the penalty box.",
    "rules": "1. Play 3v2 in one wide blue zone while the defending team vacates the far-side blue zone.\n2. An outside CB hits a long switch of play to the weak-side flank.\n3. Defending Winger tracks the overlapping FB (switching assignments with his own FB if needed) while the far CB, near CB, and DM organise inside the penalty box to defend the cross!",
    "pts": "• In the 2v1 wide zone, the defending Fullback cannot tackle until a 2nd defender arrives to create a 2v2 (\"Communicate arrival!\").",
    "prog": "• Progress to a 9v10 3-Zone Game where defenders must vacate the weak-side zone within 3 seconds."
  },
  {
    "id": "def_6",
    "cat": "DEFENDING",
    "tpl": "rondo_5v2",
    "pitch": "ssg",
    "title": "Defending: 5v3 Condensing Space on Turnover",
    "age": "U10-Senior",
    "dims": "10x12 yds | 2 Mini Goals",
    "obj": "Transition from an open 5v3 possession shape to an ultra-compact 5-player block the instant the ball is lost.",
    "rules": "1. 5 Navy (3 inside, 2 outside) keep possession vs 3 White inside (6-8 passes = 1 pt).\n2. If the 3 Whites win the ball, they immediately try to score in 2 mini goals (2 pts) or dribble out of the grid (3 pts).\n3. All 5 Navy players must sprint in to condense the space and block the mini goals!",
    "pts": "• In possession = OPEN the space; Out of possession = CONDENSE the space immediately.\n• Progression: Play 6v6 where Coach calls 2 numbers who must jog around the pitch, forcing the team to defend 4v6!",
    "prog": "• Add a penalty box behind the grid so defenders must block entry into the box."
  },
  {
    "id": "def_7",
    "cat": "DEFENDING",
    "tpl": "def_arc",
    "pitch": "half",
    "title": "Defending: 3v4(+1) Delay & Recover (\"Cone Run\")",
    "age": "U12-Senior",
    "dims": "Half Pitch | Red Offside Line",
    "obj": "Delay a fast break while numerically unbalanced (3v4), protect the space in behind, and intercept the through-ball.",
    "rules": "1. GK passes to a defender (RB 2). RB deliberately passes to an opposing attacker and must run around a far cone before recovering!\n2. Attackers break 4v3(+1) and MUST play a through-ball across the red line before scoring (within 8s = 2 pts).\n3. The remaining 3 defenders drop and narrow to delay the attack and intercept the through-ball while RB sprints back.",
    "pts": "• Do not dive in when outnumbered; delay the ball carrier, close central channels, and track runners in behind.",
    "prog": "• Expand to 6v6 (4-2 vs 6 attackers) with counter-attack mini goals on the halfway line."
  },
  {
    "id": "def_8",
    "cat": "DEFENDING",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "Defending: Low-Zone \"OPEN!\" Cue & Central Collapse",
    "age": "U12-Senior",
    "dims": "Half Pitch | 8v8 to 11v11",
    "obj": "React to a turnover while spread out in build-up shape by collapsing centrally to protect the penalty box.",
    "rules": "1. Defending team (4-3 shape) starts compactly in front of their box.\n2. When Coach calls \"OPEN!\", defenders spread out wide into build-up positions.\n3. Coach immediately passes to an opposing attacker, who plays into Striker (9) -> defenders must sprint back inward to close the central corridor and block shots!",
    "pts": "• Nearest defender presses the ball carrier to get their head down; all other defenders funnel inside toward the penalty spot.",
    "prog": "• Progress to an 11v11 \"1-0 Lead Scenario\" where the leading team keeps possession and defends transitions."
  },
  {
    "id": "def_9",
    "cat": "DEFENDING",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "Defending: Middle-Zone Track Back & Force Wide",
    "age": "U12-Senior",
    "dims": "25x30 yds | Pole Gate / Goal",
    "obj": "When possession is lost in midfield, sprint back behind the ball to protect the central goal/gate and force opponents wide.",
    "rules": "1. Blue (3 CMs + 1 F inside + 1 CB in back zone = 4+1) keeps possession vs 4 Reds (8 passes = 1 pt).\n2. When Red wins the ball, they break out of the square to dribble through the central red pole gate (or score past GK = 2 pts).\n3. Blue midfielders must sprint back behind the ball to help the CB force Red wide to the sidelines (1 pt for Blue).",
    "pts": "• Nearest player delays the ball carrier; all other midfielders sprint diagonally back toward the penalty spot to close the central corridor.",
    "prog": "• Progress to 6(+2)v6 with 2 CBs in the back zone and a full goal + GK."
  },
  {
    "id": "trans_ssg_1",
    "cat": "TRANSITION",
    "tpl": "poch_4v4_1",
    "pitch": "ssg",
    "title": "Transition: 4(+1)v4 Press & Expand to Perimeter",
    "age": "U11-Senior",
    "dims": "25x25 yds | 1-3 Touch",
    "obj": "Press as a compact unit inside to win the ball, then immediately sprint to the outside perimeter in positive transition.",
    "rules": "1. Maroon starts on the perimeter (4+1 vs 4) aiming for 6-8 passes = 1 pt.\n2. Blue presses inside. When Blue wins the ball, they keep possession via the Neutral (N) while all 4 Blues sprint to the outside lines (1 pt) and Maroon collapses inside.",
    "pts": "• Quality of the first pass after winning the ball (ideally 1-touch to the Neutral).\n• Immediate width in positive transition.",
    "prog": "• Progress to a 2-Zone 8v5 Transition Game (25x45 yds)."
  },
  {
    "id": "trans_ssg_2",
    "cat": "TRANSITION",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "Transition: 3-Team Dynamic 10v5 Zone Switch",
    "age": "U12-Senior",
    "dims": "40x50 yds (2 Equal Zones)",
    "obj": "Pass out of pressure to an outside target player and sprint across zones in positive transition.",
    "rules": "1. 3 teams of 5: Maroon (inside) + Yellow (outside perimeter) keep possession (10v5) in Zone 1 vs Blue.\n2. When Blue wins the ball, they pass to an outside Yellow player ASAP.\n3. All 5 Blues sprint to the outside perimeter of Zone 2, while Yellow moves inside Zone 2 and Maroon sprints across to defend!",
    "pts": "• Complete 8 passes in normal possession = 1 pt; complete 8 passes after a transition = 2 pts!",
    "prog": "• Progress to a full-pitch 4-3-3 vs 4-3-3 game with a 15-second counter-attack timer."
  },
  {
    "id": "trans_ssg_3",
    "cat": "TRANSITION",
    "tpl": "wide_3v3_gk",
    "pitch": "half",
    "title": "Transition: Low-Zone Forward Lay-Off (6v2 Counter)",
    "age": "U13-Senior",
    "dims": "Full Pitch | Low Zone Box",
    "obj": "Defend the penalty box, win the ball, hit a firm vertical pass to the Striker (9) for a lay-off, and attack 6v2.",
    "rules": "1. Back 4 + 2 DMs defend the Low Zone against 7 attackers.\n2. When defenders win the ball, they play out to DM (6) or directly to Striker (9) waiting at the halfway line.\n3. Striker (9) lays off to oncoming midfielders (6, 8, 10) and Wingers (7, 11) to attack 6v2 against 2 defending CBs within 10-12 seconds!",
    "pts": "• Hard, precise first forward pass into the Striker's feet to bypass 7 opponents at once.",
    "prog": "• Progress to a full 11v11 Tactical Game."
  },
  {
    "id": "trans_ssg_4",
    "cat": "TRANSITION",
    "tpl": "trans_3zone",
    "pitch": "full",
    "title": "Transition: \"NOW!\" Signal 3-Zone Through-Ball",
    "age": "U12-Senior",
    "dims": "40x60 yds (3 Zones)",
    "obj": "React instantly to a turnover or Coach's signal in the Middle Zone to thread a through-ball in behind.",
    "rules": "1. 6v6 possession inside the 40x30 yd Middle Zone; 2 GKs in large goals at each end.\n2. Coach waits for a turnover (or shouts \"NOW!\" / Goal \"1\" or \"2\").\n3. Team in possession immediately attacks that goal — MUST include a through-ball from the Middle Zone into the End Zone! Goals within 8 seconds count double.",
    "pts": "• Weight of through-pass and synchronised sprint runs in behind.",
    "prog": "• Progress to 8v8 Tactical Middle-Zone Press to 4 Mini Goals."
  },
  {
    "id": "trans_ssg_5",
    "cat": "TRANSITION",
    "tpl": "trans_3zone",
    "pitch": "full",
    "title": "Transition: \"5-5-5 Rule\" Driving Counter-Attack",
    "age": "U14-Senior",
    "dims": "Full Pitch (3 Zones | 11v11)",
    "obj": "Win the ball in the Middle Zone and execute a high-speed driving counter-attack under the 5-5-5 Rule.",
    "rules": "1. Opponent builds from Zone 1 into Zone 2. Defending team presses in Zone 2 to win the ball.\n2. 5-5-5 RULE ON WINNING BALL:\n   • Play into Attacking Zone 1 within 5 SECONDS.\n   • Maximum of 5 PASSES to finish.\n   • Minimum of 5 PLAYERS must sprint into Zone 1 before scoring!",
    "pts": "• Driving support runs from deep to overwhelm the retreating defenders.",
    "prog": "• Add the reverse 5-5-5 rule if the opponent breaks into Zone 3."
  },
  {
    "id": "trans_ssg_6",
    "cat": "TRANSITION",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "Transition: 4(+4)v4 Zonal 6-Second Fast Break",
    "age": "U12-Senior",
    "dims": "20x40 yds (4 Zones + 2 GKs)",
    "obj": "Win the ball in the middle zones and finish a 4v1(+2) fast break within 6 seconds before outside players recover.",
    "rules": "1. 20x40 yd pitch split into 4 zones. White (4 outside) + Yellow (2 middle, 1 in each end zone) keep possession (8 passes = 1 pt, then score).\n2. Black (4 inside middle zones) presses to win the ball.\n3. When Black wins it, they attack either goal against the 1 Yellow end-zone player + 2 recovering White outside players (finish within 6 seconds!).",
    "pts": "• Decisive 1-touch combination play or 1v1 dribbling before the 2 recovering defenders get back.",
    "prog": "• Progress to 8v8(+3) 4-Square Midfield Zonal Game."
  },
  {
    "id": "trans_ssg_7",
    "cat": "TRANSITION",
    "tpl": "wave_6v5",
    "pitch": "full",
    "title": "Transition: 1v0(+1) to 4v3(+1) Recovering Waves",
    "age": "U11-Senior",
    "dims": "25x25 yds | 2 Large Goals + GKs",
    "obj": "Attack at high speed with a recovering defender chasing from behind in continuous waves up to 4v3(+1).",
    "rules": "1. Step 1: Attacker 1 dribbles to score 1v0 while Defender 1 chases from behind -> 1v0(+1).\n2. Step 2: Defender 2 enters with a ball to attack the opposite goal with Defender 1, while Attacker 2 chases -> 2v1(+1).\n3. Continues to 3v2(+1) and 4v3(+1).",
    "pts": "• In a 2v1/3v2, drive at speed to commit the defender, then release the free teammate.",
    "prog": "• Add 4 wide neutral crossers on the wings."
  },
  {
    "id": "trans_ssg_8",
    "cat": "TRANSITION",
    "tpl": "wave_3v2",
    "pitch": "half",
    "title": "Transition: Fast 3v2 (+GK) Counter-Attack Duels",
    "age": "U11-Senior",
    "dims": "35x30 yds | 3v2 to Goal",
    "obj": "Attack at maximum speed in a 3v2 overload with the central ball-carrier committing both defenders.",
    "rules": "1. 2 defenders flanking the goal serve an aerial ball to any of the 3 attackers on the 35-yard line.\n2. Central attacker drives straight at the 2 defenders to commit them, with teammates sprinting on both wings.\n3. VARIATION: 1 defender starts on the goal-line and 1 starts on the sideline — attackers must read and exploit the open side!",
    "pts": "• If a wide player receives the first pass, the central player immediately makes an overlapping run to create a 2v1.",
    "prog": "• 6-second shot clock to finish the 3v2."
  },
  {
    "id": "trans_ssg_9",
    "cat": "TRANSITION",
    "tpl": "wave_6v5",
    "pitch": "full",
    "title": "SSG: 1v1 to 6v5 Overload Wave Game",
    "age": "U10-U18",
    "dims": "60x40 yds | 2 Mini Goals",
    "obj": "Continuous end-to-end overload waves: 1v1 -> 2v1 -> 3v2 -> 4v3 -> 5v4 -> 6v5.",
    "rules": "1. Coach serves Ball 1 for 1v1.\n2. Ball 2 enters for 2 Reds vs 1 Blue (2v1).\n3. Ball 3 enters for 3 Blues vs 2 Reds (3v2), continuing all the way to 6v5.",
    "pts": "• Fast ruthless finishes in 1v1/2v1; controlled positional overloads in 5v4/6v5.",
    "prog": "• Use full-size goals with Goalkeepers."
  },
  {
    "id": "trans_ssg_10",
    "cat": "TRANSITION",
    "tpl": "back2back",
    "pitch": "ssg",
    "title": "SSG: Back-to-Back Goals 5v5 (3v2 Overload)",
    "age": "U11-U18",
    "dims": "60x40 yds | Back-to-Back Goals",
    "obj": "Keep possession in one half to create a 3v2 attacking overload in the opposite half.",
    "rules": "1. Two large goals with GKs are placed back-to-back in the centre of the pitch.\n2. Play 5v5 (or 2v2 in each half + 2 floating Jokers).\n3. Build in one half and combine into the other half to score with a 3v2 overload.",
    "pts": "• Occupy the right spaces at the right times; don't force the transition until the 3v2 is on.",
    "prog": "• Expand to 6v6(+1) with a focus on defending 3v2 overloads."
  },
  {
    "id": "trans_ssg_11",
    "cat": "TRANSITION",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "SSG: Dual-Direction 6v6 Transition Game",
    "age": "U12-U18",
    "dims": "40x30 yds | 4 End Zones",
    "obj": "Train all 4 phases of the game simultaneously with perpendicular attacking directions.",
    "rules": "1. 6v6 in the central grid.\n2. Team A attacks SIDE-TO-SIDE (scoring by receiving/dribbling into the side zones).\n3. Team B defends the sides and counters END-TO-END into the top/bottom end zones!",
    "pts": "• When Team A loses the ball, they must immediately transition from wide spacing to compact end-to-end defending.",
    "prog": "• Limit touches to 2-3 in the central grid."
  },
  {
    "id": "trans_ssg_12",
    "cat": "TRANSITION",
    "tpl": "ssg_multigoal",
    "pitch": "ssg",
    "title": "SSG: 4-Goal Conditioned 5v5 (+1 Joker)",
    "age": "U10-U18",
    "dims": "60x40 yds | 4 Mini Goals",
    "obj": "Control game tempo, complete 6 passes, and switch the point of attack to score in any of the 4 goals.",
    "rules": "1. 5v5 (+1 Joker) in a 60x40 yd pitch with 4 mini goals (2 at each end).\n2. A team must complete 6 consecutive passes before they can score in ANY of the 4 goals (1-touch finish).",
    "pts": "• Knowing when to speed up to penetrate and when to rest with the ball.\n• Constant scanning of all 4 goals.",
    "prog": "• Variation: Team A keeps possession for 10 passes = 1 pt; Team B wins ball and scores in any of the 4 goals within 2 touches."
  },
  {
    "id": "trans_ssg_13",
    "cat": "TRANSITION",
    "tpl": "ssg_4quad",
    "pitch": "ssg",
    "title": "SSG: 4-Quadrant Positional Balance (4v4 + 2 Jokers)",
    "age": "U10-U16",
    "dims": "22x22 yds (4 Equal Quadrants)",
    "obj": "Maintain spatial balance with 1v1 locked in each quadrant while 2 free Jokers roam to create 2v1/3v1 overloads.",
    "rules": "1. Divide a 22x22 yd grid into 4 equal quadrants (1 Maroon attacker + 1 Blue defender locked in each).\n2. 2 Yellow Jokers roam freely into ANY quadrant to help the team in possession create local 2v1 or 3v1 overloads.\n3. 10 consecutive passes = 1 point.",
    "pts": "• Jokers read where pressure is highest and arrive to outnumber the defender.\n• Quadrant players stay wide/angled to keep diagonal passing lanes open.",
    "prog": "• Require the 2 Jokers to always occupy different quadrants."
  },
  {
    "id": "trans_ssg_14",
    "cat": "TRANSITION",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "SSG: Dual-Pitch \"Score & Switch Fields\" (5v5)",
    "age": "U10-U16",
    "dims": "44x22 yds (2 Adjacent Pitches)",
    "obj": "Adapt instantly between a 5+GK v 5+GK goalkeeper pitch and a 5v5 4-mini-goal pitch every time a goal is scored!",
    "rules": "1. Set up two adjacent pitches side-by-side: Pitch 1 has 2 full goals + GKs (5+GK v 5+GK); Pitch 2 has 4 small goals and NO GKs (5v5).\n2. Start on Pitch 1. The instant EITHER team scores a goal, all 10 outfield players immediately sprint across into Pitch 2 to play 5v5 to the 4 mini goals!\n3. When a goal is scored on Pitch 2, sprint back to Pitch 1!",
    "pts": "• Mental agility and transition speed between two completely different tactical environments.",
    "prog": "• Team that scores gets the ball immediately in the new pitch."
  },
  {
    "id": "trans_ssg_15",
    "cat": "TRANSITION",
    "tpl": "trans_3zone",
    "pitch": "full",
    "title": "SSG: Futsal 3-Zone Dynamic Overload (6v6+GKs)",
    "age": "U11-U18",
    "dims": "44x24 yds (3 Zones: Def / Mid / Att)",
    "obj": "Progress from a 1v1(+1) in the middle organization zone to activate a 3v3 battle in the attacking zone.",
    "rules": "1. Divide pitch into 3 zones. Each team places 3 Defenders in Zone 1, 1 Midfielder in Zone 2 (1v1), and 2 Forwards in Zone 3.\n2. Game starts in Zone 2 (1v1). The team in possession may bring 1 Defender up from Zone 1 to create a 2v1 overload in Zone 2.\n3. Once the ball enters Zone 3, the 2 Forwards + 1 advancing midfielder attack the 3 Defenders (3v3)!",
    "pts": "• Fast transitions between zones to exploit the 2v1 in midfield before the opponent recovers.",
    "prog": "• Variation: 3v3 in Zone 2 passes to lone target in Zone 3, who lays off for a runner bursting from Zone 2 to score!"
  },
  {
    "id": "fit_1",
    "cat": "FITNESS",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Warm-Up: Pre-Match 4v4(+2) & 3-Ball Finishing",
    "age": "U12-Senior",
    "dims": "12x25 yds | 15-Min Routine",
    "obj": "Complete pre-match warm-up: dynamic activation, passing in pairs, 4v4(+2) possession, and 3-ball finishing.",
    "rules": "1. 5 min: Dynamic mobility & activation.\n2. 2 min: Position-specific passing in pairs.\n3. 3 min: 4v4(+2) End-to-End Possession in a 12x25 yd grid (1-2 touch).\n4. 3 min: \"3-Ball Finishing\" (Shot 1: dribble & shoot; Shot 2: receive, turn & shoot; Shot 3: finish wide fullback cross) + 30s sharp sprints.",
    "pts": "• High tempo, sharp vocal communication, and match-realistic finishing.",
    "prog": "• Use before every competitive club fixture."
  },
  {
    "id": "fit_2",
    "cat": "FITNESS",
    "tpl": "dutch_1v1",
    "pitch": "ssg",
    "title": "Speed & Agility: Quick Feet vs Middle Runner",
    "age": "U11-Senior",
    "dims": "20x15 yds | 3v1 Speed",
    "obj": "Move the ball rapidly side-to-side to score before the central sprinter touches the corner mannequin.",
    "rules": "1. Middle defender (Yellow) dribbles from start cone, passes to the 3 Attackers, and sprints to press.\n2. 3 Attackers combine quickly to score in either mini-goal BEFORE the defender can touch the mannequin beside that goal.",
    "pts": "• High ball speed to switch point of attack faster than the defender can sprint.",
    "prog": "• Add a cognitive colour-call sprint race before the pass."
  },
  {
    "id": "fit_3",
    "cat": "FITNESS",
    "tpl": "rondo_5v2",
    "pitch": "ssg",
    "title": "Fitness: 15-Pass Rondo & Box-to-Box Sprint Switch",
    "age": "U12-Senior",
    "dims": "30x15 yds (2 Zones)",
    "obj": "Short high-tempo possession through a rotating pivot, followed by a long switch and collective sprint.",
    "rules": "1. 5 players in Zone 1 complete 15+ passes playing through a constantly rotating middle player.\n2. On the 15th pass, switch the ball to the lone target player in Zone 2.\n3. 4 players sprint at 100% speed across to Zone 2 to support (leaving 1 behind as the new target).",
    "pts": "• Combines technical precision under fatigue with repeated high-intensity sprint efforts.",
    "prog": "• Add 2 chasing defenders who try to intercept during the 15 passes."
  },
  {
    "id": "fit_4",
    "cat": "FITNESS",
    "tpl": "lamche_x",
    "pitch": "half",
    "title": "Conditioning: Hurdle/Pole Jumps, Overlap & Cross",
    "age": "U12-Senior",
    "dims": "Half Pitch | Speed Endurance",
    "obj": "Perform plyometric hurdle jumps and slalom footwork before executing a 4-player overlap and cross.",
    "rules": "1. DM (6) dribbles through poles -> passes wide to Winger (7).\n2. Winger (7) jumps over hurdle, checks back, passes diagonally to Striker (9), and sprints up the touchline.\n3. Striker (9) jumps hurdle, lays off to AM (8), and curves into the box.\n4. AM (8) slides overlapping Winger (7) to cross for Striker (9) and Far-Post Winger (11) skipping through ground poles!",
    "pts": "• Maintain crisp passing weight and first-time finishing technique at high heart rates (3-4 reps per side, 3 min rest).",
    "prog": "• Switch play with a diagonal aerial pass to the opposite Winger (11) to cross."
  },
  {
    "id": "fit_5",
    "cat": "FITNESS",
    "tpl": "wave_3v2",
    "pitch": "half",
    "title": "Speed Circuit: Agility Ladder, 1-2 & 3rd-Man Finish",
    "age": "U11-Senior",
    "dims": "Half Pitch | Speed & Finishing",
    "obj": "Explode through agility hurdles and poles into a fast 4-player combination to finish past the GK.",
    "rules": "1. Player A dribbles through slalom poles and passes to C.\n2. C passes to B -> B passes to D, then jumps over 2 hurdles and sprints around the mannequin.\n3. D lays off to A -> A threads a through-ball (or aerial chip) behind the mannequins for C's timed run to control and shoot in 2 touches!",
    "pts": "• Explosive acceleration out of the hurdles/poles; composure on the final pass and shot.",
    "prog": "• Rotate A -> B -> C -> D continuously."
  },
  {
    "id": "fit_6",
    "cat": "FITNESS",
    "tpl": "set_piece",
    "pitch": "half",
    "title": "Set Piece: Short Corner \"Sole Roll & Scoop\"",
    "age": "U11-U18",
    "dims": "Attacking Half | Corner Routine",
    "obj": "Draw 2 defenders out to the corner flag and use a disguised sole-roll and scoop pass to enter the penalty box.",
    "rules": "1. 2 attackers stand over the corner kick, drawing 2 defenders out.\n2. Taker 1 rolls the ball forward with the sole of his foot and sprints between/around the 2 defenders.\n3. Taker 2 scoops the ball over the 2 defenders' heads into Taker 1's path inside the box to cut back or chip to the far post!",
    "pts": "• Element of surprise pulls 2 defenders out of the box and creates a clean 3v2 inside.",
    "prog": "• Keep 2 CBs + 1 FB back in security positions."
  },
  {
    "id": "fit_7",
    "cat": "FITNESS",
    "tpl": "set_piece",
    "pitch": "half",
    "title": "Set Piece: Short Corner \"Set & Spin\"",
    "age": "U11-U18",
    "dims": "Attacking Half | Corner Routine",
    "obj": "Use a late sprint to the corner flag, a 1-touch set, and a spin around 2 defenders to cross from inside the box.",
    "rules": "1. No. 8 makes a late sprint toward the corner flag, drawing 2 defenders.\n2. Corner taker (7) plays short to No. 8 -> No. 8 \"Sets\" 1-touch back to No. 7 and immediately \"Spins\" around the 2 defenders.\n3. No. 7 chips/passes the return ball into No. 8's run inside the box to hit Near Post (10), Far Post (9), or Penalty Spot (11).",
    "pts": "• Box runners hold their runs until No. 8 spins so they arrive on the move.",
    "prog": "• Practice against passive defenders first, then 100% live."
  },
  {
    "id": "fit_8",
    "cat": "FITNESS",
    "tpl": "set_piece",
    "pitch": "half",
    "title": "Set Piece: Short Corner \"One-Two Set & Shoot\"",
    "age": "U11-U18",
    "dims": "Attacking Half | Corner Routine",
    "obj": "Play a short 1-2 at the corner while a near-post decoy run opens a lane to the edge of the box for a first-time shot.",
    "rules": "1. No. 8 comes short for a 1-2 with Corner Taker (7).\n2. Near-side player (4) makes a hard decoy run toward the near post to drag his marker away.\n3. Shooter (10) breaks out of the back-post pack, arcs his run to the edge of the 18-yard box, and strikes No. 7's pass first time!",
    "pts": "• Shooter (10) must curve his run so his body is angled toward goal for a 1-touch strike.",
    "prog": "• Variation: Instead of shooting, No. 10 chips a short diagonal cross to the back post (\"One-Two Set & Cross\")."
  },
  {
    "id": "fit_9",
    "cat": "FITNESS",
    "tpl": "set_piece",
    "pitch": "half",
    "title": "Set Piece: Edge-of-Box Free Kick (\"Cross-Over Decoy\")",
    "age": "U11-U18",
    "dims": "Attacking Half | Free Kick",
    "obj": "Split the defensive wall using two simultaneous cross-over runs or a disguised sideways slip pass.",
    "rules": "1. ROUTINE A (Cross-Over Decoy): 4 players around the ball. Player A taps short to C (who traps it with his sole) and overlaps left, while Player B sprints across right -> Shooter D blasts through the split wall!\n2. ROUTINE B (Mix-Up Disguise): A and B stand with backs to goal hiding the ball; as C runs up to shoot, A nudges B aside and slips a sideways pass for B to spin and shoot around the wall!",
    "pts": "• 3 runners on the far side of the box sprint in on the shot to finish any goalkeeper rebounds.",
    "prog": "• Test in a 7v7+GK competitive set-piece game."
  },
  {
    "id": "pass_15",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: 1-2 & Diagonal Pass in 20x10 Box",
    "age": "U10-Senior",
    "dims": "20x10 yds | 1-Touch",
    "obj": "Develop 1-touch diagonal passing and immediate movement to receive the return pass.",
    "rules": "1. 5 players set up on the corners of a 20x10 yd rectangle.\n2. Player A passes diagonally to B and moves to receive the vertical return pass.\n3. B passes vertically back to A and sprints to the opposite corner; A passes to the next corner and repeats.",
    "pts": "• Strictly 1-touch passing.\n• Time the run to meet the return pass on the move.",
    "prog": "• Run two balls simultaneously from opposite corners."
  },
  {
    "id": "pass_16",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: Check-Off & Double 1-2 Square",
    "age": "U11-Senior",
    "dims": "30x30 yds | 6-8 Players",
    "obj": "Create space by checking off mannequins/cones before executing double 1-2 combinations.",
    "rules": "1. Players A and A1 pass to B and B1 after they check away and touch a marker cone.\n2. B plays a double 1-2 with C (first touch left foot, second touch right foot) before passing to the opposite corner.\n3. All players rotate one station forward.",
    "pts": "• Synchronise passes on both sides simultaneously.\n• Check away sharply to simulate losing a marker.",
    "prog": "• Progress to 1-touch lay-offs throughout."
  },
  {
    "id": "pass_17",
    "cat": "PASSING",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Passing: Numbered 1-to-9 Awareness Sequence",
    "age": "U10-Senior",
    "dims": "25x25 yds | 3 Balls",
    "obj": "Develop 360-degree scanning, body shape, and directional first touches into free space.",
    "rules": "1. 9 players numbered 1 to 9 move freely inside a 25x25 yd grid with 3 balls in play.\n2. Players must pass in numerical order (1->2->3...->9->1) using 2 touches.\n3. Take the first touch directly toward the next numbered teammate.",
    "pts": "• Constantly scan to know where both your server and your next receiver are located.\n• Sprint 3-4 yards into new space after every pass.",
    "prog": "• Limit to 1 touch or add a 4th ball for advanced groups."
  },
  {
    "id": "pass_18",
    "cat": "PASSING",
    "tpl": "dutch_1v1",
    "pitch": "ssg",
    "title": "Passing: Directional 1st Touch Under Pressure",
    "age": "U10-U18",
    "dims": "10x20 yds | Pairs in Boxes",
    "obj": "Take a positive directional first touch away from an oncoming presser.",
    "rules": "1. Players work in pairs between two 2x2 yd coned boxes 15-20 yards apart.\n2. After passing, the server immediately makes an arced sprint to close down either the left or right side of the receiver.\n3. Receiver scans the presser's angle, takes a 1st touch out of the box in the opposite direction, and dribbles across.",
    "pts": "• Line up with the incoming pass and check the presser's approach early.\n• First touch must be clean and forward into space.",
    "prog": "• Combine 2 grids into a 4-box square for continuous 1-touch opening up."
  },
  {
    "id": "pass_19",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: \"Figure of 8\" Passing Diamond",
    "age": "U11-U18",
    "dims": "40x20 yds | 2 Triangles",
    "obj": "Switch play through a central pivot with free decision-making on combinations.",
    "rules": "1. Set up a 40x20 yd diamond with 2 groups working either side through a central DM.\n2. Players circulate the ball in a Figure-of-8 pattern, rotating A -> B -> C -> D -> A.\n3. Encourage blind-side runs, overlaps, and diagonal passes into central pockets.",
    "pts": "• Open body shape (half-turn) to receive on the back foot.\n• Break the line with the first touch forward.",
    "prog": "• Add a second ball starting from the opposite end."
  },
  {
    "id": "pass_20",
    "cat": "PASSING",
    "tpl": "diamond_circuit",
    "pitch": "ssg",
    "title": "Passing: 1-Touch Triangle with Pole Gate",
    "age": "U10-U18",
    "dims": "20x20 yds | 1-Touch",
    "obj": "Take a forward first touch through a pole/cone gate and thread a 3rd-man pass.",
    "rules": "1. Set up 3 poles in a triangle (15-25 yds apart) with a small cone gate at Point B.\n2. A passes to B, who receives side-on and breaks through the gate (or plays a 1-2 with A).\n3. B threads a pass for C's timed run; C passes to the start line and all players rotate.",
    "pts": "• Shoulders facing forward on the first touch to break the line.\n• High ball speed along the ground.",
    "prog": "• Finish with a 2-touch shot across goal at Point C."
  },
  {
    "id": "pass_21",
    "cat": "PASSING",
    "tpl": "pos_end2end",
    "pitch": "ssg",
    "title": "Passing: 2-Pair Lofted Switch & Lay-Off",
    "age": "U12-Senior",
    "dims": "35x15 yds | 4 Players",
    "obj": "Combine short 1-touch lay-offs with accurate medium-to-long lofted switches.",
    "rules": "1. Two pairs (A/B and C/D) stand 30-35 yards apart.\n2. A passes to B, who checks away, opens up on the half-turn, and hits a lofted pass to C (A and B swap).\n3. C controls and lays off to D, who sets C back up to hit the return lofted pass to B.",
    "pts": "• Cushion the aerial pass with a soft first touch into the lay-off.\n• Drive the lofted pass with backspin so it sits up for the receiver.",
    "prog": "• Limit receivers to 2 touches (control + lay-off)."
  },
  {
    "id": "pass_22",
    "cat": "PASSING",
    "tpl": "dutch_1v1",
    "pitch": "ssg",
    "title": "Technical: Hip Feint & Change Direction 1v1",
    "age": "U9-U14",
    "dims": "10x20 yds | Groups of 5",
    "obj": "Use a hip feint with back to defender to unbalance them and accelerate away.",
    "rules": "1. Player A dribbles forward; Player B steps out to apply pressure (passive -> 50% -> 100%).\n2. A turns the hip in to feint a shot/pass one way, then cuts sharply the opposite way with the inside of the foot.\n3. A passes to C at the opposite end and joins the back of the line.",
    "pts": "• Keep the defender behind you and feel their pressure.\n• Explode away after the cut so the defender cannot recover.",
    "prog": "• Practice double hip feints and outside-of-foot exits."
  },
  {
    "id": "rondo_14",
    "cat": "RONDOS",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Rondo: 5v5 (+1 Central Pivot) Body Shape",
    "age": "U11-Senior",
    "dims": "30x30 yds | 1-2 Touch",
    "obj": "Use open body shape to scan before receiving and link through a 1-touch central neutral.",
    "rules": "1. 5v5 inside a 30x30 yd grid with 1 Yellow Neutral locked in a small central zone.\n2. Neutral is strictly 1-touch; all other players are limited to 2 touches.\n3. 10 consecutive passes = 1 point.",
    "pts": "• Central Neutral must scan 360 degrees before the ball arrives to play 1-touch.\n• Constant off-ball angles around the central zone.",
    "prog": "• Award 2 points if the 10 passes include 2 through-passes via the Neutral."
  },
  {
    "id": "rondo_15",
    "cat": "RONDOS",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Rondo: 4v4 (+5 Neutrals) Open Body Shape",
    "age": "U11-Senior",
    "dims": "30x30 yds | 4v4(+5)",
    "obj": "Pass to an outside neutral, immediately adjust body shape, and scan in depth before receiving back.",
    "rules": "1. 4v4 (+1 central Neutral) inside with 4 outside Neutrals on the perimeter.\n2. Inside players have 2 touches; central Neutral has 1 touch; outside Neutrals must pass within 3 seconds.\n3. Complete 10-15 internal passes = 1 point.",
    "pts": "• After passing outside, immediately open your body to see the far side of the grid.\n• Establish eye contact before receiving.",
    "prog": "• Only passes between inside players count toward the 10-pass target."
  },
  {
    "id": "rondo_16",
    "cat": "RONDOS",
    "tpl": "barca_3zone",
    "pitch": "ssg",
    "title": "Possession: 5v5v5 Three-Zone Warm-Up",
    "age": "U11-Senior",
    "dims": "20x30 yds | 3 Equal Zones",
    "obj": "Combine short 5-pass retention with driven or lofted switches over a pressing middle team.",
    "rules": "1. 3 teams of 5: Team A & C occupy the two outer zones; Team B defends in the middle zone.\n2. Team B sends 1 (then 2) pressers into Team A's zone; Team A must complete 5 passes before playing through or over the middle zone to Team C.\n3. If Team A loses the ball, they swap into the middle.",
    "pts": "• Use the full width and depth of the outer zone.\n• Players in the far zone stay mobile to open passing channels between the middle defenders.",
    "prog": "• Limit outer teams to 2 touches."
  },
  {
    "id": "rondo_17",
    "cat": "RONDOS",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Possession: 3v3 (+4 Outside Support) Positional",
    "age": "U10-Senior",
    "dims": "10x10 to 15x15 yds",
    "obj": "Quick central combinations (CB, DM, CM) supported by 4 positional perimeter players (CB, LB, RB, F).",
    "rules": "1. 3v3 inside a tight square with 4 permanent outside support players (1 on each side).\n2. Team in possession (7v3) circulates the ball rapidly using the 4 positional wall players.\n3. If defenders win the ball, they swap roles with the inside 3.",
    "pts": "• Inside 3 must constantly shift to create triangles with the outside wall players.\n• Crisp 1-2 touch speed.",
    "prog": "• Limit outside players to 1 touch."
  },
  {
    "id": "rondo_18",
    "cat": "RONDOS",
    "tpl": "pos_end2end",
    "pitch": "ssg",
    "title": "Possession: 5v5 (+4) Middle & End Support",
    "age": "U12-Senior",
    "dims": "15x25 yds | 5v5(+4)",
    "obj": "Transfer the ball end-to-end using 2 central Jokers and 2 end-line target players.",
    "rules": "1. 5v5 inside the grid + 2 central Yellow Jokers + 2 Blue end-line players (CB & F).\n2. Team in possession works the ball from one end player to the other and back again.\n3. On turnover, roles swap immediately.",
    "pts": "• Use the 2 central Jokers to bounce passes and break the pressing line.\n• Immediate counter-press on ball loss.",
    "prog": "• Require at least 1 pass through a central Joker before hitting the far end player."
  },
  {
    "id": "rondo_19",
    "cat": "RONDOS",
    "tpl": "rondo_4v2",
    "pitch": "ssg",
    "title": "Rondo: 4v1 & 4v2 Dual-Grid Intensity",
    "age": "U9-U15",
    "dims": "Two 10x10 yd Grids",
    "obj": "Contrast ball speed and decision-making between a 4v1 and a 4v2 environment.",
    "rules": "1. Run two 10x10 yd grids side-by-side: Grid 1 is 4v1; Grid 2 is 4v2.\n2. Attackers keep possession; defenders stay inside to intercept.\n3. Every 3 minutes, rotate groups between the 4v1 and 4v2 grids.",
    "pts": "• In 4v1, focus on 1-touch rhythm; in 4v2, focus on disguising passes and splitting the pair.",
    "prog": "• Limit touches to 1-touch in Grid 1 and 2-touch in Grid 2."
  },
  {
    "id": "build_15",
    "cat": "BUILDUP",
    "tpl": "wide_3v3_gk",
    "pitch": "half",
    "title": "Build-Up: GK + 3 Defenders vs 2 Pressers",
    "age": "U9-U13",
    "dims": "Half Pitch | 3+GK v 2",
    "obj": "Teach young defenders to split wide, receive on the half-turn, and dribble past the halfway line.",
    "rules": "1. Coach passes to the GK; 3 defenders (LB, CB, RB) split into wide/central positions against 2 pressing forwards.\n2. GK reads the 2 forwards and plays to the free defender.\n3. Defenders score by dribbling under control across the halfway line; forwards score in the main goal if they win it.",
    "pts": "• GK receives with inside of foot and plays quickly on the 2nd touch.\n• Defenders receive on the back foot facing forward.",
    "prog": "• Add a 3rd pressing midfielder and a friendly DM (4+GK v 3)."
  },
  {
    "id": "build_16",
    "cat": "BUILDUP",
    "tpl": "barca_3zone",
    "pitch": "ssg",
    "title": "Build-Up: 4v2 (+3) Long-Ball Zone Switch",
    "age": "U12-Senior",
    "dims": "45x20 yds | 2 Side Grids",
    "obj": "Keep possession under 4v2 pressure, then hit an accurate long switch into a target zone.",
    "rules": "1. Two 15x20 yd grids separated by a 15 yd gap, with 4v2 (+2 support) in each grid and target players outside.\n2. Complete at least 3 passes in your grid (2-touch), then hit a driven or lofted long pass to control inside the opposite target zone.\n3. Most clean switches in 3 minutes wins.",
    "pts": "• Head up on pass #3 to spot the open target zone.\n• Accuracy and weight on the long switch.",
    "prog": "• Progress to an 8v8 Divided Pitch Game with fullback side zones."
  },
  {
    "id": "build_17",
    "cat": "BUILDUP",
    "tpl": "pos_end2end",
    "pitch": "half",
    "title": "Build-Up: 2-Defender Balance & DM Cover",
    "age": "U12-Senior",
    "dims": "25x25 to Half Pitch | 2 Zones",
    "obj": "Maintain defensive balance when 1 of 2 Centre Backs dribbles forward into midfield.",
    "rules": "1. Low Zone: 2 CBs + 1 DM vs 1 opposing Striker (3v1). High Zone: 3v4.\n2. One CB dribbles forward into the High Zone to create a 4v4 and attack the goal.\n3. Simultaneously, the DM drops into the Low Zone to cover the CB's vacated slot and maintain a 2v1 against the Striker!",
    "pts": "• Automatic rotation: CB steps up = DM drops in.\n• If opponents win the ball, all zone restrictions lift immediately.",
    "prog": "• Progress to an 11v11 game with 3v1 in the low zone."
  },
  {
    "id": "build_18",
    "cat": "BUILDUP",
    "tpl": "pos_end2end",
    "pitch": "half",
    "title": "Build-Up: 3-Defender Balance & DM Cover",
    "age": "U12-Senior",
    "dims": "35x45 yds | 2 Zones",
    "obj": "Maintain a 3v2 numerical advantage at the back when a Centre Back drives into the attacking half.",
    "rules": "1. Low Zone: 3 Defenders + 1 DM vs 2 opposing Strikers (4v2). High Zone: 3v4.\n2. One defender dribbles into the High Zone to create a 4v4.\n3. The DM immediately drops into the back 3 to preserve a 3v2 safety net against the 2 Strikers.",
    "pts": "• Always retain +1 numerical superiority at the back to prepare for a negative transition.",
    "prog": "• Expand to an 11v11 game with 4v2 in the low zone and 6v8 in the high zone."
  },
  {
    "id": "build_19",
    "cat": "BUILDUP",
    "tpl": "pep_2323",
    "pitch": "half",
    "title": "Build-Up: Fullback Timing & AM Cover (3 Zones)",
    "age": "U12-Senior",
    "dims": "35x35 yds + 2 Side Channels",
    "obj": "Time the Fullbacks' forward runs into attack while an Attacking Midfielder drops to cover.",
    "rules": "1. 5v4 inside the main grid with 2 attacking Fullbacks in wide side channels.\n2. Fullbacks push forward only when the team has secure possession; an AM immediately shifts into a covering position.\n3. If defenders win the ball, 2 waiting forwards enter to counter-attack into 2 mini goals.",
    "pts": "• Never leave both flanks exposed at once.\n• Quick recovery runs by the Fullback if possession is lost.",
    "prog": "• Progress to an 8v8 Half-Pitch SSG with 3 counter-attack mini goals."
  },
  {
    "id": "build_20",
    "cat": "BUILDUP",
    "tpl": "rdz_5v3",
    "pitch": "half",
    "title": "Build-Up: 10v6 Break Lines & Finish vs 4 Trackers",
    "age": "U13-Senior",
    "dims": "Half Pitch | Low Zone + Box",
    "obj": "Build out from a 7v6 low zone into the Striker's lay-off, then sprint forward to finish against 4 recovering defenders.",
    "rules": "1. Low Zone: Back 4 + 2 DMs + 1 AM vs 6 opponents. High Zone: 2 Wingers + Striker vs 4 mannequins.\n2. Build through the 6 pressers into the Striker (F), who lays off to the oncoming AM.\n3. All build-up players (except CBs) surge forward to combine and score while 4 of the 6 opponents sprint back to defend!",
    "pts": "• Fast, decisive lay-off from the Striker.\n• Explosive forward runs from the Wingers and AM to beat the recovering defenders.",
    "prog": "• Replace 2 mannequins with live central defenders."
  },
  {
    "id": "att_16",
    "cat": "ATTACKING",
    "tpl": "wave_3v2",
    "pitch": "half",
    "title": "Attacking: 3v2 Zonal Decision-Making & Finish",
    "age": "U11-Senior",
    "dims": "Half Pitch | 3v2 Zone",
    "obj": "Read passive/active defenders in the final third to choose between dribbling, 1-2s, or overlapping runs.",
    "rules": "1. DM passes to the Winger or AM dropping unmarked behind midfield mannequins.\n2. Attackers face 2 defenders locked in the final-third zone.\n3. If defenders drop off, dribble and shoot; if defenders step out, combine with an overlap or diagonal run in behind to score.",
    "pts": "• Receive on the half-turn to face the defenders immediately.\n• Accuracy of the finish over pure power.",
    "prog": "• Make both defenders 100% active and add a recovering midfielder."
  },
  {
    "id": "att_17",
    "cat": "ATTACKING",
    "tpl": "pep_2323",
    "pitch": "half",
    "title": "Attacking: 5v4 (+1) Flank Overload 3-Zone Game",
    "age": "U12-Senior",
    "dims": "Half Pitch | 3 Zones",
    "obj": "Break through a compact backline by sending an extra AM or Fullback into the final zone to create a 3v2.",
    "rules": "1. Low Zone: 3(+1)v2 build-up (2-touch). High Zone: 2v2.\n2. Once the ball is played into the High Zone, an outside AM or Fullback bursts in to create a 3v2 overload and score.\n3. If defenders win it, all zone limits lift and they dribble across the far end-line.",
    "pts": "• Synchronise the overload run with the entry pass into the High Zone.\n• Always maintain defensive balance behind the ball.",
    "prog": "• Progress to an 11v11 split-pitch game."
  },
  {
    "id": "att_18",
    "cat": "ATTACKING",
    "tpl": "ssg_multigoal",
    "pitch": "ssg",
    "title": "Attacking: \"Shoot on Sight\" 3-Team 4v4(+4)",
    "age": "U10-U18",
    "dims": "30x30 yds | 2 Large Goals + GKs",
    "obj": "Encourage ambition, quick half-yard shooting angles, and 1-touch set-ups around the box.",
    "rules": "1. 3 teams of 4: 2 teams play 4v4 inside; the 3rd team acts as 4 outside wall players.\n2. Teams must bounce a pass off an outside player before shooting — then shoot on sight from anywhere!\n3. Rotate teams every 3-4 minutes; no offsides, kick-ins only.",
    "pts": "• Half a yard of space is all you need to get a shot off.\n• Follow every shot immediately for goalkeeper rebounds.",
    "prog": "• Bring the 4 outside players in for a 7v7 \"Shoot on Sight\" game."
  },
  {
    "id": "att_19",
    "cat": "ATTACKING",
    "tpl": "diamond_circuit",
    "pitch": "half",
    "title": "Attacking: 1-2, Set & Spin Finishing Circuit",
    "age": "U10-U18",
    "dims": "40x50 yds | 2 Large Goals + GKs",
    "obj": "Rehearse high-tempo 1-2s, Set & Spin movements, and 3rd-man shooting combinations.",
    "rules": "1. Two groups attack opposite goals simultaneously using designated \"setters\" (B) at the edge of the box.\n2. Var 1 (One-Two & Shoot): A plays 1-2 with B and shoots first time.\n3. Var 2 (Set & Spin): B sets back to A and spins around the cone to receive A's through-ball and score!",
    "pts": "• Setter checks away from the cone and sets 1-touch into the shooter's stride.\n• Place vs power depending on GK position.",
    "prog": "• Add a 2nd setter (B1 & B2) for a 3rd-man run finishing sequence."
  },
  {
    "id": "att_20",
    "cat": "ATTACKING",
    "tpl": "pep_2323",
    "pitch": "half",
    "title": "Attacking: Runs from Deep in Behind + Crossing",
    "age": "U12-Senior",
    "dims": "Half Pitch | 2 CMs, 2 Wingers + GK",
    "obj": "Receive on the back foot in midfield and hit a diagonal aerial pass for a deep runner or wide crosser.",
    "rules": "1. Coach/DM passes to RCM (max 2 touches: open up on back foot + pass).\n2. Option 1: LCM times a straight run between the FB and CB mannequins to receive RCM's diagonal aerial pass and finish in 2 touches.\n3. Option 2: RCM plays wide to Winger to cross for the 3 oncoming runners.",
    "pts": "• Half-turn body shape on the first touch so you can see both the deep runner and the wide winger.\n• Practice from both left and right sides.",
    "prog": "• Introduce 2 live central defenders inside the box."
  },
  {
    "id": "att_21",
    "cat": "ATTACKING",
    "tpl": "pep_2323",
    "pitch": "half",
    "title": "Attacking: 3-Channel 4v2 Position Overloads",
    "age": "U12-U18",
    "dims": "Half Pitch | 3 Vertical Channels",
    "obj": "Combine within 2 adjacent channels (FB, Winger, CM, Striker) to create a 3v2/4v2 penetration.",
    "rules": "1. Divide half a pitch into 3 vertical channels. Attack starts alternately from RB or LB.\n2. Right side attack uses only Right & Central channels: RB plays 1-2 with RW -> into Striker (F) -> lay-off to RW cutting inside -> through-ball for LCM's penetrating run to finish!\n3. Alternate immediately to the Left & Central channels.",
    "pts": "• Finish across the goalkeeper so the Striker can tap in rebounds.\n• Wide players make sharp inside diagonal runs.",
    "prog": "• Add a 3rd recovering defender."
  },
  {
    "id": "att_22",
    "cat": "ATTACKING",
    "tpl": "wave_3v2",
    "pitch": "ssg",
    "title": "Attacking: Continuous 2v2 Duels in Pairs Wave",
    "age": "U10-U18",
    "dims": "35x25 yds | 2 Large Goals + GKs",
    "obj": "High-intensity 2v2 attacking combinations (overlaps, 1-2s, 1v1s) with instant transitions.",
    "rules": "1. Two teams of 6 paired up at opposite ends with 2 large goals + GKs.\n2. Ball 1: GK serves Pair 1A/1B attacking 2v2 against Red Pair 1A/1B.\n3. The instant Ball 1 finishes, the opposite GK serves Red Pair 2A/2B attacking the other way against Blue Pair 2A/2B.",
    "pts": "• Use overlaps, 1-2s, and 1-touch lay-offs to isolate defenders.\n• Ruthless, fast finishing under pressure.",
    "prog": "• Allow defending pair to counter-attack if they win the ball."
  },
  {
    "id": "att_23",
    "cat": "ATTACKING",
    "tpl": "wave_3v2",
    "pitch": "half",
    "title": "Attacking: 3v1 (+2 Recovering) Fast Finish",
    "age": "U11-U18",
    "dims": "Half Pitch | 2 Halfway Gates",
    "obj": "Exploit a temporary 3v1 numerical advantage at maximum speed before 2 recovering midfielders arrive.",
    "rules": "1. 1 Striker vs 1 Defender near the box; 2 Attacking Mids and 2 Defending Mids on the halfway line.\n2. Attacking Mid passes into Striker to start a 3v1; the 2 Defending Mids must touch a cone 2 yards back before sprinting to recover!\n3. Attackers combine at pace (1-3 touches) to score before the defenders recover.",
    "pts": "• Striker checks away, sets 1-touch, or spins to open the gate.\n• If defenders win it, they score by passing through the halfway gates.",
    "prog": "• Expand to 6v2 (+3 Recovering Defenders) including both Wingers."
  },
  {
    "id": "press_12",
    "cat": "PRESSING",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "Pressing: 4v4 (+3) Directional Pressing Diamond",
    "age": "U11-U18",
    "dims": "10x15 yds | 4v4(+3)",
    "obj": "Defend a 4v7 numerical disadvantage as a compact diamond to stop central penetration.",
    "rules": "1. 4 Blue defenders vs 4 Red + 3 Yellow Jokers (7v4 in possession) inside a 10x15 yd grid.\n2. Blue forms a compact diamond (F, 2 CMs, DM) to block central passes and force the ball wide.\n3. When Blue wins the ball, teams swap roles.",
    "pts": "• Keep the ball in front and protect the space in behind.\n• Force play down the sides of the diamond to create 1v1/2v2 traps.",
    "prog": "• Award 1 point to defenders for every interception."
  },
  {
    "id": "press_13",
    "cat": "PRESSING",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "Pressing: 2-Zone 5v2 / 6v4 Disadvantage Press",
    "age": "U11-U18",
    "dims": "30x20 to 35x25 yds | 2 Zones",
    "obj": "Press aggressively while outnumbered, win the ball, and switch immediately to your waiting teammates.",
    "rules": "1. Split grid into 2 equal zones with 5v5 (or 6v6). Team A keeps possession in Zone 1 (10 passes = 1 pt) while 2-4 players from Team B press them.\n2. When Team B's pressers win the ball, they pass immediately into Zone 2 to their waiting teammates.\n3. Team A immediately sends 2-4 players sprinting across to press Zone 2!",
    "pts": "• Press collectively to create 1v1/2v2 around the ball.\n• Zero delay on the defensive transition sprint across the halfway line.",
    "prog": "• Increase pressers from 2 to 3 or 4 to raise intensity."
  },
  {
    "id": "press_14",
    "cat": "PRESSING",
    "tpl": "barca_3zone",
    "pitch": "ssg",
    "title": "Pressing: 5v5v5 Three-Team Pressing Transition",
    "age": "U12-U18",
    "dims": "60x40 yds | 3 Thirds",
    "obj": "Send a 3-player pressing unit into the end zone while 2 teammates screen through-passes in the middle.",
    "rules": "1. 3 teams of 5: Red and Yellow in the two end zones; Blue starts in the middle zone.\n2. Coach serves Red -> 3 Blue players sprint in to press (5v3) while 2 Blues stay in the middle to intercept.\n3. Red must complete 3 passes before switching to Yellow (1 pt); if Blue wins it, Red swaps to the middle.",
    "pts": "• Keep passes below head height so the 2 middle screeners can intercept.\n• Fast, coordinated 3-player press.",
    "prog": "• Require 5 passes before switching across the middle."
  },
  {
    "id": "press_15",
    "cat": "PRESSING",
    "tpl": "poch_4v4_1",
    "pitch": "ssg",
    "title": "Pressing: 4v4 (+4) Quick Negative Transition Box",
    "age": "U11-Senior",
    "dims": "30x30 yds | 4v4(+4)",
    "obj": "Train outside support players to collapse inside immediately upon losing possession.",
    "rules": "1. 4v4 inside a 30x30 yd square with 4 outside support players for the attacking team (8v4).\n2. Attackers use 2 touches inside and 1 touch outside to keep possession.\n3. When defenders win the ball, they try to dribble out of any of the 4 sides — all 4 outside attackers must sprint INSIDE to help win the ball back before they escape!",
    "pts": "• Instant reaction from the outside players on turnover.\n• Always keep a central safety player near the ball.",
    "prog": "• Add a 5-second timer to recover the ball."
  },
  {
    "id": "press_16",
    "cat": "PRESSING",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "Pressing: 5v5 (+2) 5-Second Recovery Game",
    "age": "U12-Senior",
    "dims": "40x40 yds | End-Line Dribble",
    "obj": "Regain possession within 5 seconds of losing the ball before the opponent consolidates or breaks out.",
    "rules": "1. 5v5 inside a 40x40 yd grid with 2 outside support players (1-touch) for the attacking team.\n2. Attackers score by dribbling across the opposite end-line.\n3. On turnover, 1 outside player enters to help win the ball back within 5 SECONDS; defenders score 1 pt for keeping it >5s or 3 pts for dribbling across the far line.",
    "pts": "• Immediate pressure from the nearest player to get the opponent's head down.\n• Outside player sprints in to close the nearest passing lane.",
    "prog": "• Add a finishing zone with a full goal and GK at one end."
  },
  {
    "id": "def_10",
    "cat": "DEFENDING",
    "tpl": "dutch_1v1",
    "pitch": "ssg",
    "title": "Defending: 1v1 Closing Down Attacking Space",
    "age": "U9-U15",
    "dims": "10x10 yds | 2v2 or 1v1",
    "obj": "Sprint out during the flight of the pass to close down space and decelerate into a balanced defensive stance.",
    "rules": "1. Defenders start on their goal-line and play a firm pass across the 10x10 yd grid to the attackers.\n2. Immediately after passing, defenders sprint out to reduce the attacker's space and prevent them dribbling across the defenders' end-line.\n3. Swap roles after each rep.",
    "pts": "• Travel fast while the ball is moving; slow down (chop feet) 2 yards from the attacker.\n• Force the attacker onto their weaker foot.",
    "prog": "• Add 2 small goals on the defenders' line."
  },
  {
    "id": "def_11",
    "cat": "DEFENDING",
    "tpl": "trans_2zone",
    "pitch": "full",
    "title": "Defending: Midfielders Tracking Back 2-Zone Game",
    "age": "U12-Senior",
    "dims": "Half/Full Pitch | 2 Zones",
    "obj": "Sprint back from the attacking zone into the defensive zone within 6 seconds to get behind the ball.",
    "rules": "1. Zone 1: Attacking team keeps possession (6 passes = 1 pt, 3-touch limit). Zone 2: Back 4 vs opposing forwards.\n2. When defenders win the ball in Zone 1, they pass into Zone 2 to launch a fast counter-attack.\n3. 6-SECOND RULE: Attacking midfielders in Zone 1 must sprint back into Zone 2 within 6 seconds or they are locked out from defending!",
    "pts": "• Back 4 delays and protects the box until midfielders recover behind the ball.\n• Relentless recovery sprint mentality.",
    "prog": "• Progress to an 11v11 game with 3 neutral counter-attacking players."
  },
  {
    "id": "def_12",
    "cat": "DEFENDING",
    "tpl": "def_arc",
    "pitch": "full",
    "title": "Defending: Attack to Rapid Defensive Shape Recovery",
    "age": "U12-Senior",
    "dims": "Full Pitch | 11v6",
    "obj": "Transition from an attacking combination in the final third straight into a compact defensive block.",
    "rules": "1. Phase 1: 5 attackers combine unopposed in the High Zone to shoot on goal (all 10 outfield players must be past halfway).\n2. Phase 2: The instant the shot is taken, Coach serves a new ball to 5 opponents waiting in the Middle Zone!\n3. Defenders drop to delay while the 5 forwards sprint back behind the ball to restore shape.",
    "pts": "• Reorganise in relation to the new ball position, not just fixed cones.\n• Create a strong side around the ball to force mistakes.",
    "prog": "• Start with an unopposed warm-up where players sprint back to marked formation cones."
  },
  {
    "id": "def_13",
    "cat": "DEFENDING",
    "tpl": "trans_3zone",
    "pitch": "full",
    "title": "Defending: 11v11 6-Second Middle-Zone Recovery",
    "age": "U13-Senior",
    "dims": "Full Pitch | High & Mid Zones",
    "obj": "Recover all 5 attacking players from the High Zone back into the Middle Zone within 6 seconds of an attack ending.",
    "rules": "1. Phase 1: Coach serves into the High Zone for a 5v4 attack to goal (all teammates must be beyond halfway).\n2. Phase 2: As soon as the attack finishes, Coach plays a new ball to an opponent in the Middle Zone for a fast counter.\n3. All 5 High-Zone players must sprint back into the Middle Zone within 6 seconds to create defensive numerical superiority.",
    "pts": "• Communicate loudly during the recovery sprint to pick up runners.\n• Defenders in the middle zone delay without diving in.",
    "prog": "• Award bonus points if the recovering team wins the ball back before the penalty box."
  },
  {
    "id": "def_14",
    "cat": "DEFENDING",
    "tpl": "def_arc",
    "pitch": "half",
    "title": "Defending: 2v1 Flank Overload to Block Crosses",
    "age": "U12-Senior",
    "dims": "Half Pitch | 5v5(+2) Side Zones",
    "obj": "Prevent crosses by creating a 2v1 numerical advantage in the wide zone before tackling.",
    "rules": "1. 5v5 (+2 outside support) with 2 Yellow Side Zones near the flanks.\n2. Attackers try to work the ball into the Yellow Side Zones and cross into the box (no long balls).\n3. RULE: The defending Fullback tracks the winger into the Yellow Zone to delay, but is NOT allowed to tackle until a 2nd defender (DM or CB) enters to create a 2v1!",
    "pts": "• Loud communication: the 2nd defender must shout when they arrive so the Fullback knows to engage.\n• Remaining defenders lock down the box.",
    "prog": "• Expand to an 8v9 game on half a pitch."
  },
  {
    "id": "trans_ssg_16",
    "cat": "TRANSITION",
    "tpl": "trans_2zone",
    "pitch": "ssg",
    "title": "Transition: 2-Zone 5v5(+2) Driving Support Runs",
    "age": "U11-Senior",
    "dims": "25x35 yds | 2 Equal Zones",
    "obj": "Win the ball, play a forward pass into the opposite zone, and sprint across in 6-8 seconds.",
    "rules": "1. 5v5 inside Zone 1 + 2 Neutrals (1 in each zone).\n2. Team in possession scores 1 pt for 6 passes or 2 pts for 15 seconds, then switches to Zone 2.\n3. If defenders win the ball, they pass to the Neutral in Zone 2 and ALL players sprint across within 6-8 seconds (1 pt) to continue!",
    "pts": "• Fast driving support runs to offer passing angles in the new zone.\n• Bonus 2 points if the team that lost it wins it back before it crosses zones.",
    "prog": "• Remove the 2nd Neutral so the switch pass must be weighted into space for a runner."
  },
  {
    "id": "trans_ssg_17",
    "cat": "TRANSITION",
    "tpl": "trans_2zone",
    "pitch": "full",
    "title": "Transition: 7v7(+2) Position-Specific Counter",
    "age": "U12-Senior",
    "dims": "40x60 yds | 2 Equal Zones",
    "obj": "Win the ball in your defensive half, hit the Striker (9) ASAP, and score within 8-10 seconds.",
    "rules": "1. Split 40x60 yd pitch into 2 halves. Team A attacks in Zone 1 (5+2 wide Neutrals vs 5).\n2. In Zone 2, Team B's Striker (9) waits 1v1 against 1 Team A defender.\n3. When Team B wins the ball, they pass to Striker (9) ASAP and all players unlock to sprint forward and score within 8-10 seconds (goal counts double!).",
    "pts": "• Look forward immediately on winning possession.\n• Fast supporting runs from central midfielders and wingers beyond the Striker.",
    "prog": "• Expand to an 11v11 full-pitch tactical game with a 10-second double-goal rule."
  },
  {
    "id": "trans_ssg_18",
    "cat": "TRANSITION",
    "tpl": "wave_3v2",
    "pitch": "ssg",
    "title": "Transition: 4v2(+2) Quick Reactions Tracking Back",
    "age": "U11-Senior",
    "dims": "20x25 yds | 3 Teams of 4 + 2 GKs",
    "obj": "Delay a 4v2 overload while 2 teammates sprint in from the outside to restore 4v4 balance.",
    "rules": "1. 3 teams of 4: 2 teams play 4v4+GKs inside; Team 3 has 2 players waiting at each end.\n2. When a team scores (or on whistle), the defending team exits and the scoring team gets a new ball from the opposite GK.\n3. Team 3 sprints onto the pitch: the nearest 2 delay the 4v2 while the far 2 sprint back at 100% speed to restore 4v4!",
    "pts": "• First 2 defenders protect the central path to goal and delay without diving in.\n• Far 2 defenders sprint at full speed to get goal-side.",
    "prog": "• Play continuous 3-minute competitive rounds."
  },
  {
    "id": "trans_ssg_19",
    "cat": "TRANSITION",
    "tpl": "pos_end2end",
    "pitch": "full",
    "title": "Transition: End-to-End GK-to-GK 10v8 Possession",
    "age": "U12-Senior",
    "dims": "Half/2-3 Pitch | 2 GKs",
    "obj": "Transfer the ball from one Goalkeeper to the other and back while reacting instantly to high-press turnovers.",
    "rules": "1. Yellow (back 4 at each end + 2 CMs) tries to transfer the ball from GK1 to GK2 and back (2 pts) or complete 8 passes (1 pt).\n2. Opposing 8 press collectively to win the ball, complete 6 passes (1 pt), and score in either goal (2 pts).\n3. On turnover, Yellows immediately press the ball carrier and block channels to goal.",
    "pts": "• In possession = OPEN the space; Out of possession = CLOSE the space.\n• Fast supporting runs to give the far GK passing outlets.",
    "prog": "• Split the pitch into 2 halves where all players must cross halfway before transferring back."
  },
  {
    "id": "trans_ssg_20",
    "cat": "TRANSITION",
    "tpl": "ssg_multigoal",
    "pitch": "ssg",
    "title": "SSG: 4v4+GK with 6 Multi-Goals",
    "age": "U10-U16",
    "dims": "28x28 yds | 1 Big + 5 Mini Goals",
    "obj": "Attack a full-size goal while defending 3 small counter-attack goals (or vice versa).",
    "rules": "1. 4v4 + 1 GK in a 28x28 yd square.\n2. Team A attacks the full-size goal (with GK) and 2 wide mini goals, while defending 3 mini goals on their own end-line.\n3. High-tempo transitions whenever possession changes.",
    "pts": "• Recognize when the central big goal is blocked and switch quickly to the wide mini goals.\n• Defenders protect central lanes first.",
    "prog": "• Add a 2nd GK and big goal for a full match-style SSG."
  },
  {
    "id": "trans_ssg_21",
    "cat": "TRANSITION",
    "tpl": "pos_4v4_3",
    "pitch": "ssg",
    "title": "SSG: 2+2v2+2 Outside-to-Inside Overload",
    "age": "U10-U16",
    "dims": "22x22 yds | 2 Goals + GKs",
    "obj": "Exploit a 4v2 attacking overload by bringing 2 outside teammates onto the pitch only when in possession.",
    "rules": "1. Each team has 2 players inside + 2 players outside the 22x22 yd grid (+ 2 GKs).\n2. When a team has possession, their 2 outside players may enter the grid to create a 4v2 attacking overload!\n3. The defending team's 2 outside players must stay outside until their team wins the ball back.",
    "pts": "• Fast transitions to prolong the 4v2 imbalance before defenders can recover.\n• Use width to stretch the 2 inside defenders.",
    "prog": "• Allow 1 outside defender to enter if the attack lasts longer than 10 seconds."
  },
  {
    "id": "trans_ssg_22",
    "cat": "TRANSITION",
    "tpl": "trans_3zone",
    "pitch": "full",
    "title": "SSG: Formation-Specific 7v7 & 9v9 (3-2-3)",
    "age": "U9-U12",
    "dims": "50x60 to 60x65 yds | 2 Large Goals",
    "obj": "Apply 11v11 positional principles (triangles, width, depth, and compactness) in 7v7 and 9v9 formats.",
    "rules": "1. Set up 7v7 (4-2 vs 3-3) or 9v9 (3-2-3 vs 3-2-3) on a 60x65 yd pitch with large goals.\n2. Attackers focus on width, depth, and always having 2 passing options (plus 1 behind).\n3. Defenders stay compact, goal-side, and force play wide.",
    "pts": "• Do not all move toward or away from the ball at the same time.\n• Receive on the half-turn to speed up play.",
    "prog": "• Play with short corners only to encourage possession build-up."
  },
  {
    "id": "fit_10",
    "cat": "FITNESS",
    "tpl": "ssg_multigoal",
    "pitch": "ssg",
    "title": "Warm-Up: Football Tennis (3-Touch, 1-Bounce)",
    "age": "U9-Senior",
    "dims": "5x15 yds | 5v5 over Net/Line",
    "obj": "Fun, competitive technical warm-up developing first-touch aerial control, volleys, and teamwork.",
    "rules": "1. 5v5 across a low net or coned central barrier in a 5x15 yd court.\n2. Serve with a drop-volley from the baseline. Receiving team has max 3 team touches (1 touch per player at a time) and 1 bounce allowed.\n3. Score a point if opponents let it bounce twice, hit out, or exceed 3 touches.",
    "pts": "• High energy, communication, and soft cushioning touches.\n• Celebrate every point to build team spirit.",
    "prog": "• Play 2v2 or 3v3 for more touches per player."
  },
  {
    "id": "fit_11",
    "cat": "FITNESS",
    "tpl": "pos_end2end",
    "pitch": "ssg",
    "title": "Warm-Up: 3-Round Juggling Relay (1s, 2s, 4s)",
    "age": "U9-Senior",
    "dims": "20x15 yds | Teams of 8",
    "obj": "Competitive ball-mastery warm-up progressing from solo juggling to cooperative group keep-ups.",
    "rules": "1. Teams of 8 race to juggle the ball across the grid and drop it into a target bin/hoop (if it hits the ground, restart!).\n2. Round 1: Individual solo juggling.\n3. Round 2: Pairs (1 touch at a time each).\n4. Round 3: Fours (1 touch at a time each). First team to finish wins!",
    "pts": "• Soft, controlled touches with both feet and thighs.\n• Communication and rhythm in pairs and fours.",
    "prog": "• Require a headed finish into the bin."
  },
  {
    "id": "fit_12",
    "cat": "FITNESS",
    "tpl": "dutch_1v1",
    "pitch": "ssg",
    "title": "Speed & Agility: Visual/Sound Signal Sprint Race",
    "age": "U10-Senior",
    "dims": "15x15 yds | Mannequins & Cones",
    "obj": "Train cognitive reaction speed, lateral footwork, and explosive acceleration to audio/visual cues.",
    "rules": "1. Players bounce on the balls of their feet in front of a central mannequin.\n2. Coach calls \"Left\" or \"Right\" (1-2 times): players side-step to touch the side mannequin and return to centre.\n3. Final Cue: Coach shouts \"Back\" (turn & sprint to red cones) OR bounces a ball (sprint forward to blue cones)!",
    "pts": "• Stay low on the balls of your feet for instant change of direction.\n• Keep eyes up to catch the visual ball-bounce cue.",
    "prog": "• Add \"Turn!\" (180-degree spin) commands before the final sprint."
  },
  {
    "id": "fit_13",
    "cat": "FITNESS",
    "tpl": "dutch_1v1",
    "pitch": "ssg",
    "title": "Speed & Agility: 1v1 Physical Duel & Colour Sprint",
    "age": "U11-Senior",
    "dims": "15x10 yds | 2 Colour Gates",
    "obj": "Combine controlled shoulder-to-shoulder physicality with explosive reaction sprints.",
    "rules": "1. Two players jog into the centre side-on and engage in a controlled 50% shoulder-to-shoulder duel.\n2. Coach calls \"Forward\" / \"Back\" (or \"Red\" / \"Yellow\" corresponding to opposite pole gates).\n3. Both players react immediately and race through the called gate — fastest wins!",
    "pts": "• Balanced athletic base during the shoulder duel.\n• Explosive first 3 steps out of the turn.",
    "prog": "• Have players hold arms and spin 180° on \"Change!\" before the colour call."
  },
  {
    "id": "fit_14",
    "cat": "FITNESS",
    "tpl": "hex_circuit",
    "pitch": "ssg",
    "title": "Speed & Agility: Plyometric Hurdles & Slalom Circuit",
    "age": "U11-Senior",
    "dims": "30x25 yds | 4 Stations",
    "obj": "Develop lower-body explosiveness, single-leg landing stability, and rapid footwork.",
    "rules": "1. Station A: Single-leg hops over cones/hurdles landing on the opposite foot (stabilize 1 sec).\n2. Station B: Quick forward/lateral steps through low cones.\n3. Station C: High-speed slalom through 6 poles.\n4. Station D: Fast feet through speed ladders + 10-yard sprint. Jog to next station.",
    "pts": "• Soft, controlled knee alignment on every single-leg landing (ACL injury prevention).\n• Drive arms powerfully through the slalom and sprint.",
    "prog": "• Alternate forward, lateral, and backward movements on Round 2."
  }
];
