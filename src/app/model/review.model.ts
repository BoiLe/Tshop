export interface ReviewShopDTO {
    creationTime: Date
    creatorId: String
    customerAvatarUrl: String
    customerName: String
    customerPhoneNumber: String
    deleterId: null
    deletionTime: null
    entityId: String
    entityType: number
    hasComment: true
    hasImage: true
    id: String
    isDeleted: boolean
    lastModificationTime: String
    lastModifierId: String
    listMediaDto: [{mediaId:String, seoFileName:String, altAttribute: String, titleAttribute: String}]
    orderCode:String
    orderId: String
    rating: number
    reviewMessage: String
    shopAvatarUrl: String
    shopCode: String
    shopId: String
    shopName: String
    status: number
    userId: String
}
