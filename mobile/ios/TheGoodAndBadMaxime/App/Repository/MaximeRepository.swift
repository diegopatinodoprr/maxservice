//
//  MaximeRepository.swift
//  TheGoodAndBadMaxime
//
//  Created by Diego Patino on 10/01/2020.
//  Copyright © 2020 Diego Patino. All rights reserved.
//

import Foundation
import CoreData
import Foundation
import UIKit

protocol IMaximeRepositoryDelegate{
    func loadData()
}

public class MaximeRepository:IMaximeRepository{
    var delegates: [IMaximeRepositoryDelegate]

    private var filePath = Bundle.main.path(forResource: "maxscores", ofType: "json")
    private var internalData:[ScoreModel] = []
    private var tot:[NSManagedObject] = []

    func getScore(_ id: String) -> Int {
        return internalData.filter{$0.id == id}.map{$0.value}.reduce(0, +)
    }

    init(){
        delegates = []
        openJson()
    }

    public func loadData(){
        openJson()
    }
    private func openJson(){


        guard let appDelegate =
            UIApplication.shared.delegate as? AppDelegate else {
                return
        }

        let managedContext = appDelegate.persistentContainer.viewContext

        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "MaxEntity")
        request.returnsObjectsAsFaults = false

        do {
           internalData = []
            let result = try managedContext.fetch(request)
            for data in result as! [NSManagedObject] {

                let score: ScoreModel=ScoreModel(id:data.value(forKey: "id") as! String,
                                                 value: data.value(forKey: "value") as! Int,
                                            creationDate: data.value(forKey: "creationDate") as! Date)
                internalData.append(score)
                self.updateDeleagtes()
            }

        } catch {
            print("Failed")
        }
    }
    private func updateDeleagtes(){
        self.delegates.forEach{$0.loadData()}
    }

    public func addScore(id:String,value:Int){
        guard let appDelegate =
            UIApplication.shared.delegate as? AppDelegate else {
                return
        }
        let context = appDelegate.persistentContainer.viewContext
        let entity = NSEntityDescription.entity(forEntityName: "MaxEntity", in: context)
        let score = NSManagedObject(entity: entity!, insertInto: context)
        score.setValue(id, forKey: "id")
        score.setValue(value, forKey: "value")
        score.setValue(NSDate(), forKey: "creationDate")
        do {
            try context.save()
            openJson()
        } catch{
            print("error save contexte")
        }


    }

    private func saveJson(){
        guard let appDelegate =
            UIApplication.shared.delegate as? AppDelegate else {
                return
        }
        let context = appDelegate.persistentContainer.viewContext
        let entity = NSEntityDescription.entity(forEntityName: "MaxEntity", in: context)
        let newUser = NSManagedObject(entity: entity!, insertInto: context)

        newUser.setValue("mort", forKey: "id")
        newUser.setValue("0", forKey: "value")
        newUser.setValue(NSDate(), forKey: "creationDate")
        do {
            try context.save()
        } catch{
            print("error save contexte")
        }
    }
}

public struct ScoreModel:Codable {
    var id: String
    var value: Int
    var creationDate: Date

}

