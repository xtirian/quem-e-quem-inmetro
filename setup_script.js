// primeiro verifica a tela 
const largura_tela = window.screen.width;

//define a imagem que aparecerá e posiciona os botoes
if(largura_tela < 771) {
    document.getElementById('organograma-mobile').style.display = 'auto';
    document.getElementById('organograma-tablet').style.display= 'none';
    document.getElementById('organograma-desktop').style.display= 'none';
    document.getElementById('buket_presi').style.top = '10%';
    document.getElementById('buket_presi').style.left = '50%';
    document.getElementById('buket_surgo').style.top = '15%';
    document.getElementById('buket_surgo').style.left = '20%';
    document.getElementById('buket_surrs').style.top = '20%';
    document.getElementById('buket_surrs').style.left = '20%';
    document.getElementById('buket_gabin').style.top = '26%';
    document.getElementById('buket_gabin').style.left = '20%';
    document.getElementById('buket_rbmlqi').style.top = '31%';
    document.getElementById('buket_rbmlqi').style.left = '20%';
    document.getElementById('buket_coger').style.top = '11%';
    document.getElementById('buket_coger').style.left = '83%';
    document.getElementById('buket_ouvid').style.top = '17%';
    document.getElementById('buket_ouvid').style.left = '83%';
    document.getElementById('buket_profe').style.top = '24%';
    document.getElementById('buket_profe').style.left = '83%';
    document.getElementById('buket_audin').style.top = '30%';
    document.getElementById('buket_audin').style.left = '83%';
    document.getElementById('buket_dimci').style.top = '36%';
    document.getElementById('buket_dimci').style.left = '83%';
    document.getElementById('buket_dplan').style.top = '42%';
    document.getElementById('buket_dplan').style.left = '83%';
    document.getElementById('buket_diraf').style.top = '47%';
    document.getElementById('buket_diraf').style.left = '83%';
    document.getElementById('buket_dconf').style.top = '53%';
    document.getElementById('buket_dconf').style.left = '83%';
    document.getElementById('buket_dimel').style.top = '58%';
    document.getElementById('buket_dimel').style.left = '83%';
    document.getElementById('buket_dimav').style.top = '64%';
    document.getElementById('buket_dimav').style.left = '83%';
    document.getElementById('buket_ctinf').style.top = '69%';
    document.getElementById('buket_ctinf').style.left = '83%';
    document.getElementById('buket_caint').style.top = '76%';
    document.getElementById('buket_caint').style.left = '83%';
    document.getElementById('buket_cgcre').style.top = '82%';
    document.getElementById('buket_cgcre').style.left = '83%';
    document.getElementById('buket_cgcom').style.top = '87%';
    document.getElementById('buket_cgcom').style.left = '83%';
    document.getElementById('buket_cored').style.top = '94%';
    document.getElementById('buket_cored').style.left = '83%';
} else if(largura_tela < 1152 && largura_tela >= 771 ) {
    document.getElementById('organograma-mobile').style.display = 'none';
    document.getElementById('organograma-tablet').style.display= 'auto';
    document.getElementById('organograma-desktop').style.display= 'none'; 
    
    document.getElementById('buket_presi').style.top = '9%';
    document.getElementById('buket_presi').style.left = '55%';
    document.getElementById('buket_surgo').style.top = '14%';
    document.getElementById('buket_surgo').style.left = '20%';
    document.getElementById('buket_surrs').style.top = '19%';
    document.getElementById('buket_surrs').style.left = '20%';
    document.getElementById('buket_gabin').style.top = '25%';
    document.getElementById('buket_gabin').style.left = '20%';
    document.getElementById('buket_rbmlqi').style.top = '31%';
    document.getElementById('buket_rbmlqi').style.left = '20%';


    document.getElementById('buket_coger').style.top = '11%';
    document.getElementById('buket_coger').style.left = '90%';
    document.getElementById('buket_ouvid').style.top = '17%';
    document.getElementById('buket_ouvid').style.left = '90%';
    document.getElementById('buket_profe').style.top = '24%';
    document.getElementById('buket_profe').style.left = '90%';
    document.getElementById('buket_audin').style.top = '30%';
    document.getElementById('buket_audin').style.left = '90%';
    
    document.getElementById('buket_dimci').style.top = '36%';
    document.getElementById('buket_dimci').style.left = '90%';
    document.getElementById('buket_dplan').style.top = '42%';
    document.getElementById('buket_dplan').style.left = '90%';
    document.getElementById('buket_diraf').style.top = '47%';
    document.getElementById('buket_diraf').style.left = '90%';
    document.getElementById('buket_dconf').style.top = '53%';
    document.getElementById('buket_dconf').style.left = '90%';
    document.getElementById('buket_dimel').style.top = '58%';
    document.getElementById('buket_dimel').style.left = '90%';
    document.getElementById('buket_dimav').style.top = '64%';
    document.getElementById('buket_dimav').style.left = '90%';

    document.getElementById('buket_ctinf').style.top = '69%';
    document.getElementById('buket_ctinf').style.left = '90%';
    document.getElementById('buket_caint').style.top = '76%';
    document.getElementById('buket_caint').style.left = '90%';
    document.getElementById('buket_cgcre').style.top = '82%';
    document.getElementById('buket_cgcre').style.left = '90%';
    document.getElementById('buket_cgcom').style.top = '87%';
    document.getElementById('buket_cgcom').style.left = '90%';
    document.getElementById('buket_cored').style.top = '94%';
    document.getElementById('buket_cored').style.left = '90%';
} else {
    document.getElementById('organograma-mobile').style.display = 'none';
    document.getElementById('organograma-tablet').style.display= 'none';
    document.getElementById('organograma-desktop').style.display= 'auto';
    
    
    document.getElementById('buket_presi').style.top = '18%';
    document.getElementById('buket_presi').style.left = '47%';
    document.getElementById('buket_surgo').style.top = '28%';
    document.getElementById('buket_surgo').style.left = '10%';
    document.getElementById('buket_surrs').style.top = '40%';
    document.getElementById('buket_surrs').style.left = '10%';
    document.getElementById('buket_gabin').style.top = '45%';
    document.getElementById('buket_gabin').style.left = '85%';
    document.getElementById('buket_rbmlqi').style.top = '34%';
    document.getElementById('buket_rbmlqi').style.left = '85%';

    
    document.getElementById('buket_coger').style.top = '60%';
    document.getElementById('buket_coger').style.left = '72%';
    document.getElementById('buket_ouvid').style.top = '60%';
    document.getElementById('buket_ouvid').style.left = '25%';
    document.getElementById('buket_profe').style.top = '60%';
    document.getElementById('buket_audin').style.top = '60%';
    document.getElementById('buket_profe').style.left = '40%';
    document.getElementById('buket_audin').style.left = '57%';
    
    document.getElementById('buket_dimci').style.top = '76%';
    document.getElementById('buket_dimci').style.left = '10%';
    document.getElementById('buket_dplan').style.top = '76%';
    document.getElementById('buket_dplan').style.left = '25%';
    document.getElementById('buket_diraf').style.top = '76%';
    document.getElementById('buket_diraf').style.left = '40%';
    document.getElementById('buket_dconf').style.top = '76%';
    document.getElementById('buket_dconf').style.left = '57%';
    document.getElementById('buket_dimel').style.top = '76%';
    document.getElementById('buket_dimel').style.left = '72%';
    document.getElementById('buket_dimav').style.top = '76%';
    document.getElementById('buket_dimav').style.left = '87%';

    document.getElementById('buket_cgcom').style.top = '90%';
    document.getElementById('buket_cgcom').style.left = '18%';
    document.getElementById('buket_ctinf').style.top = '90%';
    document.getElementById('buket_ctinf').style.left = '33%';
    document.getElementById('buket_caint').style.top = '90%';
    document.getElementById('buket_caint').style.left = '48%';
    document.getElementById('buket_cgcre').style.top = '90%';
    document.getElementById('buket_cgcre').style.left = '63%';
    document.getElementById('buket_cored').style.top = '90%';
    document.getElementById('buket_cored').style.left = '78%';
}