//
//  MaximeRemoteRepository.swift
//  TheGoodAndBadMaxime
//
//  Created by Diego Patino on 14/01/2020.
//  Copyright © 2020 Diego Patino. All rights reserved.
//

import Foundation
import Alamofire
public class MaximeRemoteRepository:IMaximeRepository{
    //private  let webserviceUrl:String = "https://secure-lowlands-40055.herokuapp.com/"
     private  let webserviceUrl:String = "http://localhost:5000/api"

    var scores = [ScoreModel]()


    init(){

        loadData()
    }
    func getScore(_ id: String) -> Int {
        return 0
    }

    func addScore(id: String, value: Int) {

    }

    func loadData() {
        AF.request(webserviceUrl).responseJSON { response in
            do{
                let json = response.data
                let decoder = JSONDecoder()
                let result = try decoder.decode(Scores.self, from: json!)
                self.scores = result.scores
                print(    self.scores )
            } catch let err{
                print("jesonde cecode error \(err)")
            }
        }




    }


    var delegates: [IMaximeRepositoryDelegate] = []
}

struct Scores : Decodable {




    let scores : [ScoreModel]
}

