<?php

namespace AppBundle\Controller;


use AppBundle\AppBundle;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class CourseController extends Controller
{
    /**
     * @Route("/result", name="result")
     */
    public function ResultatCourseAction( Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $meetingName = $em->getRepository("AppBundle:Meeting")->findAll();
        $repository=$em->getRepository("AppBundle:Result");
        $athletes = $repository->findBy( array('meeting'=> '1'), array('points'=>'DESC'));
        return $this->render('result.html.twig',['result'=>$meetingName, 'athletes'=>$athletes]);
    }
}