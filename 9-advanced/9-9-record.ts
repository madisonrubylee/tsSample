type PageInfo = {
    title: string;
};

type Page = 'home' | 'about' | 'contact';

// Record 타입은 Map과 비슷하게 Key와 Value를 다른 타입으로 쓸때
// 유용하게 묶을 수 있다. 
const nav: Record<Page, PageInfo> = {
    home: {title: 'Home'},
    about: { title: 'About'},
    contact: { title : 'Contact'},
};

type Product = 'cat' | 'dog';
// 유틸리티 Capitalize  티압을 이용하면 
// 대문자로 사용할 수 있다. 
type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog' 

