<?php
sleep(1);
$pal=$_REQUEST['palabra'];
$vec=array('alma','algo','amo','aro','animo','arbol','abrir');
if (strlen($pal)>0)
{
  for($f=0;$f<count($vec);$f++)
  {
    if ($pal==substr($vec[$f],0,strlen($pal)))
      $veciguales[]=$vec[$f];
  }
}
$xml="<?xml version=\"1.0\"?>\n";
$xml.="<palabras>\n";
if (isset($veciguales))
{
  for($f=0;$f<count($veciguales);$f++)
  {
    $xml.="<palabra>".$veciguales[$f]."</palabra>\n";
  }
}
$xml.="</palabras>\n";
header('Content-Type: text/xml');
echo $xml;
?>
<!-- <div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" data-toggle="list" href="" role="tab">Home</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="" role="tab">Profile</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="" role="tab">Messages</a>
      <a class="list-group-item list-group-item-action" data-toggle="list" href="" role="tab">Settings</a>
    </div>
  </div>
</div> -->
