//
//  IMaximeRepository.swift
//  TheGoodAndBadMaxime
//
//  Created by Diego Patino on 14/01/2020.
//  Copyright © 2020 Diego Patino. All rights reserved.
//

import Foundation

protocol IMaximeRepository{
    func getScore(_ id:String) -> Int
    func addScore(id:String,value:Int)
    func loadData()
    var delegates:[IMaximeRepositoryDelegate]{get set}
}
