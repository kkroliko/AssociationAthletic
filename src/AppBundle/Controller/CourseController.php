<?php

namespace AppBundle\Controller;


use AppBundle\AppBundle;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\DBAL\Types\Type;
use DateTime;
class CourseController extends Controller
{
    /**
     * @Route("/result", name="result")
     */

    public function ResultatCourseAction( Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $query_meetings = $em->createQuery('SELECT m
                                            FROM AppBundle:Meeting m
                                            WHERE m.date < :now
                                           ')->setParameter("now", new DateTime("NOW"), Type::DATETIME);
        $finished_meetings = $query_meetings->getResult();

        $query_results = $em->createQuery('SELECT r FROM AppBundle:Result r ORDER by r.points DESC');
        $results_meetings = $query_results->getResult();


        return $this->render('result.html.twig',['results'=>$results_meetings, 'meetings'=>$finished_meetings]);

    }

    /**
     * @Route("/classement", name="classement")
     */
    public function ClassementAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $sql='SELECT SUM(result.points) as total, athlete.lastname, athlete.firstname FROM result inner join athlete on result.athlete_id = athlete.id inner join meeting on result.meeting_id = meeting.id WHERE YEAR(CURRENT_DATE()) = 2017 GROUP BY athlete.id ORDER BY total DESC 

';      $toto=$em->getConnection()->prepare($sql);
        $toto->execute();
        $resultat=$toto->fetchAll();
        return $this->render('classement.html.twig' , ['classement'=>$resultat]);
    }

}