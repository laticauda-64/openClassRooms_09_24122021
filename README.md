## Débuggez et testez un SaaS RH
Vous êtes développeur front-end chez Billed, une entreprise qui produit des solutions Saas destinées aux équipes de ressources humaines.

![Logo de Billed](https://user.oc-static.com/upload/2020/08/14/1597396368627_image2.png)

Malheureusement pour Billed, Garance, une collègue de la feature team “note de frais” a quitté l’entreprise avant d’avoir terminé l’application. Dans une semaine, l’équipe doit montrer la solution qui fonctionne à l’ensemble de l’entreprise. Matthieu, Lead développeur de la feature team a demandé à être épaulé pour tenir les délais et vous avez appris hier lors de la réunion d’équipe que c’est vous qui avez été désigné !

![Interface de l'application Billed](https://user.oc-static.com/upload/2020/08/14/15973967670682_image1.png)

À votre arrivée ce matin, vous avez reçu un e-mail de la part de Matthieu, qui donne plus de détails sur ce qui est attendu de vous.

> **Objet** : Urgent - Informations sur la mission de renfort au sein de la feature team “note de frais”  
> **De** : Matthieu  
> **À** : Moi  
> 
> Tout d’abord merci de nous prêter main-forte cette semaine pour la mise en place de tests sur la fonctionnalité “note de frais”.  
> 
> Cette fonctionnalité est très attendue sur le marché et le top management a mis la priorité dessus. L’objectif est de la lancer officiellement auprès de nos clients d’ici 2 semaines. Les délais sont donc très serrés. La feature team a beaucoup travaillé ces deux dernières semaines mais le départ de Garance n’arrange pas les choses, et nous avons besoin de ton aide pour la dernière ligne droite.  
> 
> Voici la description de la [fonctionnalité](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P7+Tests/Billed+-+Description+des+fonctionnalite%CC%81s.pdf).   
> 
> L’essentiel a déjà été développé je te rassure. Tu trouveras [le code ici](https://github.com/OpenClassrooms-Student-Center/Billed-app-FR). Il y a deux parcours utilisateurs sur cette fonctionnalité : côté administrateur RH et côté employé. Le back-end est prêt (en version alpha). Côté front-end, le parcours administrateur RH est complet, entièrement testé et débuggé.  
> 
> Ce qu’il reste à faire : fiabiliser et améliorer le parcours employé. Voici ce que j’attends de toi :
> 
> - [Bug - report]  
> Fixer les bugs identifiés dans le rapport de bug fourni par Jest. J’en ai mis une copie dans le [kanban Notion](https://www.notion.so/openclassrooms/a7a612fc166747e78d95aa38106a55ec?v=2a8d3553379c4366b6f66490ab8f0b90). 
> - [Bug - hunt]  
> Fixer les bugs identifiés par Leila notre QA sur le parcours employé. Ils sont décrits dans le kanban également.
> - [Tests unitaires et d’intégration]
> Ajouter des tests unitaires et d’intégration pour les fichiers Bills et NewBill : ces tests vont permettre d’éliminer ces bugs et éviter toute régression lors des prochaines évolutions de la solution. Certains tests sont déjà développés (pour le Login, et pour le Dashboard des administrateurs RH) : ils sont déjà cochés sur le kanban, tu peux t'en inspirer pour les restants. Comme la démo est seulement dans une semaine, nous n’avons pas le droit à l’erreur. Pour cette raison, il faut que tu assures une couverture de branche de 100 % (en dehors des appels au back-end firebase : ces derniers sont indiqués en commentaire dans le code). Tu peux t’appuyer sur le rapport de couverture de Jest (lance l’application avec live-server pour pouvoir le lire et va à l’adresse  `http://127.0.0.1:8080/coverage/lcov-report/`  : tout est indiqué dans le [readme](https://github.com/OpenClassrooms-Student-Center/P6-front-end-testing)).
> - [Test E2E]
> Puisque l’on n’a pas le temps d’automatiser des tests End-to-End, les tests seront effectués manuellement par Leila. Il faut donc que tu lui fasses un plan de test End-to-End pour la guider. Tu peux t’inspirer du [plan End-to-End](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P7+Tests/Billed+-+E2E+parcours+administrateur.pdf) que Garance a déjà rédigé sur le parcours administrateur RH.   
> 
> Autre chose : l’application contient déjà des données de test, mais si tu veux en créer de nouvelles sur le parcours employé et pouvoir les consulter sur le parcours administrateur RH, il faudra que tu utilises ton e-mail perso pour te connecter sur les deux parcours. C’est parce que le code côté back end est encore en bêta et on a dû mettre ça en place pour faciliter les tests.  
> 
> Voilà, bon courage pour résoudre ces bugs et mettre en place les tests manquants ! On compte sur toi.
>
> Matthieu  
> *Lead Developer @Billed*

Ça y est, vous avez toutes les informations pour démarrer la correction de cette application.  
C’est parti !