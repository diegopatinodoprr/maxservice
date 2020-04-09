//
//  MaximeView.swift
//  TheGoodAndBadMaxime
//
//  Created by Diego Patino on 09/01/2020.
//  Copyright © 2020 Diego Patino. All rights reserved.
//

import Foundation
import UIKit

class MaximeView: UIView {

    public var delegate:MaximeViewProtocol?
    public var id: String = "maxview"

    @IBOutlet weak var maxImage: UIImageView!

    @IBOutlet weak var maxScore: UILabel!

    @IBAction func maxScoreDown(_ sender: Any) {
         print(self.id)
        delegate?.updateScore(count: -1, id: self.id)
    }

    @IBAction func maxScoreUp(_ sender: Any) {
        delegate?.updateScore(count: 1, id: self.id)
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        commonInit()
    }

    func commonInit() {
        guard let view = loadViewFromNib() else { return }
        view.frame = self.bounds
        view.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        self.backgroundColor = UIColor.clear
        self.addSubview(view)

    }

    func updateScore(_ score:Int){
        maxScore.text = "\(score)"
    }

    func updatePicture(_ pictureId:String){
        let image = UIImage(named:  pictureId)
        self.maxImage.image = image
    }

    func loadViewFromNib() -> UIView? {
        let nib = UINib(nibName: "MaximeView", bundle: nil)
        return nib.instantiate(withOwner: self, options: nil).first as? UIView
    }
}

protocol MaximeViewProtocol:class {
    func updateScore(count: Int, id: String)
}
