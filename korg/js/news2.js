var z= 0;
Banner = new Array(z);
//Banner[0] = '<a href="http://kolomyya.org/se/sites/ko/29993/">����� �� ���������</a><br><img class="news_lead" src="/images/2010/09935.jpg">�� �������������� ���������� �������� ��� ������� ѳ������, � 6 �� 13 ������� 2010 �. ���������� ����� �� ���������: ��������, �������, ������, ����, ���� �����������, ���������, �����, ���� ����, ������������� �����, ��� ������, �������� �������, ����������� �� �������� ���';
//Banner[1] = '<a href="http://diocese.ko.if.ua/palom.html">�������� ����������� ������� �� ����������</a><br><img class="news_lead" src="/images/2010/09931.jpg">�������� ����� �����������-���������� ������� ����, �� �������������� ���������� �������� ��� ������� ѳ������, ��������� �������� ����������� ������� �� ������� ��� ����� � ̳�������� ��������� ������� ����� "���� - ��������� 2010/2011".';
Banner[0] = '<a href="http://kolomyya.org/se/sites/ko/30226/">Пропозиції до проекту Податкового кодексу приймаються за телефоном: (0342) 771934</a><br><img class="news_lead" src="/images/2010/09940.jpg">В рамках всенародного обговорення проекту Податкового кодексу України на базі Державної податкової адміністрації в Івано-Франківській області створено сall-центр. Також за телефоном Сall-центру зацікавлені особи можуть отримати інформацію...';
//Banner[1] = '<a href="http://kolomyya.org/se/sites/ko/30338/">���� �������� ������� ������ �� ����� ������� ������ ������</a><br><img class="news_lead" src="/images/2010/09944.jpg">������ ���������! ������ ������������ ������� ��������� ���������� ���������� �����, � ������� ����, ���� �������� ���� ������� ������ �� ����� ������� ������ ������. �� ������ ���������, �������� �� ��������� ���� ������...';

var jetzt=new Date();
var z=(jetzt.getSeconds())%1;
document.write(Banner[z]);