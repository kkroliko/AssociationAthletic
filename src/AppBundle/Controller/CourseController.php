<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class CourseController extends Controller
{
    /**
     * @Route("/result", name="result")
     */
    public function resultAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('result.html.twig', []);


    }
}