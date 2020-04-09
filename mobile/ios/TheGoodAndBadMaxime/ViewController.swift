//
//  ViewController.swift
//  TheGoodAndBadMaxime
//
//  Created by Diego Patino on 09/01/2020.
//  Copyright © 2020 Diego Patino. All rights reserved.
//

import UIKit

class ViewController: UIViewController ,MaximeViewProtocol{
    func updateScore(count: Int, id: String) {
        switch id {
        case "mLemort":
            mLemortVm.updateScore(count: count)
        case "mTournier" :
            mTournierVm.updateScore(count: count)
        default:
            print("on sait pas")
        }

    }

    @IBOutlet weak var mLemort: MaximeView!
    @IBOutlet weak var mTournier: MaximeView!

    var mLemortVm: MaximeViewModel
    var mTournierVm: MaximeViewModel

    required init?(coder: NSCoder){
       //let repo = MaximeRepository()
        let repo = MaximeRepository()
        mLemortVm = MaximeViewModel("mLemort",repo: repo)
        mTournierVm = MaximeViewModel("mTournier",repo: repo)
        repo.delegates = [mLemortVm,mTournierVm]
        super.init(coder:coder)
    }
   

    override func viewDidLoad() {
        super.viewDidLoad()
        mLemort.updatePicture("lemort")
        mLemort.id = mLemortVm.id
        mLemort.delegate = self
        mTournier.updatePicture("tournier")
        mTournier.id = mTournierVm.id
        mTournier.delegate = self
        //vm delegate
        mLemortVm.delegate = self
        mTournierVm.delegate = self

        mTournierVm.startApp()

        mLemortVm.startApp()


    }


}
extension ViewController:MaximeViewModelProtocol{
    func update() {
        self.mLemort.updateScore(mLemortVm.score)
        self.mTournier.updateScore(mTournierVm.score)
    }
}

