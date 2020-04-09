//
//  MaximeViewModel.swift
//  TheGoodAndBadMaxime
//
//  Created by Diego Patino on 09/01/2020.
//  Copyright © 2020 Diego Patino. All rights reserved.
//

import Foundation
public class MaximeViewModel:IMaximeRepositoryDelegate{
    func loadData() {
        score = repository.getScore(id)
        delegate?.update()
    }


    var score: Int = 0
    var id: String
    var delegate:MaximeViewModelProtocol?
    var repository:IMaximeRepository
    func updateScore(count: Int) {
        repository.addScore(id:id, value: count)
        }

    init(_ newId:String, repo:IMaximeRepository){

        id = newId
        repository = repo

        score = repository.getScore(id)
        delegate?.update()
    }
    public func startApp(){
        score = repository.getScore(id)
        delegate?.update()
    }
}

protocol MaximeViewModelProtocol:class {
    func update()
}
