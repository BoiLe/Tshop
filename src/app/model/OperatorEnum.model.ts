export enum OperatorEnum {
    /**
     *  bằng =
     */   
    eq = 'eq',
    /**
     * không bằng !=
     */
    neq = 'neq',
    /**
     * nhỏ hơn <
     */
    lt = 'lt',
    /**
     * nhỏ hơn hoặc bằng <=
     */
    lte = 'lte',
    /**
     * lớn hơn >
     */
    gt = 'gt',
    /**
     * lớn hơn hoặc bằng >= 
     */ 
    gte = 'gte',
    /**
     *  bắt đầu bởi StartsWith
     */
    startswith = 'startswith',
    /**
     *  kết thúc bởi EndsWith
     */
    endswith = 'endswith',
    /**
     * chứa chuỗi Contains
     */ 
    contains = 'contains',
    /**
     *  không chứa chuỗi
     */
    doesnotcontain = 'doesnotcontain',
    /**
     * == null 
     */
    isnull = 'isnull',
    /**
     * != null
     */
    isnotnull = 'isnotnull',
    /**
     * ==  rỗng
     */
    isempty = 'isempty',
    /**
     * != rỗng
     */
    isnotempty = 'isnotempty',
    /**
     * không null và không rỗng
     */ 
    hasvalue = 'hasvalue',
    /**
     * null hoặc rỗng
     */
    hasnovalue = 'hasnovalue',


}