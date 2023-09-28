# class AttributeManager

```cpp
Defined at ../../include/geode/basic/attribute_manager.h#44
```

 This class manages all its associated Attributes. Each Attribute is registered and can be retrieved by a given name.



## Functions

### AttributeManager

```cpp
public void AttributeManager(const AttributeManager & )
```

```cpp
Defined at ../../include/geode/basic/attribute_manager.h#46
```

### operator=

```cpp
public AttributeManager & operator=(const AttributeManager & )
```

```cpp
Defined at ../../include/geode/basic/attribute_manager.h#46
```

### AttributeManager

```cpp
public void AttributeManager()
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#325
```

### AttributeManager

```cpp
public void AttributeManager(AttributeManager && other)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#326
```

### ~AttributeManager

```cpp
public void ~AttributeManager()
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#330
```

### find_generic_attribute

```cpp
public shared_ptr find_generic_attribute(string_view name)
```

```cpp
Defined at ../../include/geode/basic/attribute_manager.h#60
```

 Recover the non-typed/generic Attribute from the attribute name. This can be used when attribute type is not known in a context.

**name** [in] The associated attribute name to look for.

**return** nullptr if no attribute matches the given name.

### find_attribute

```cpp
public std::shared_ptr<ReadOnlyAttribute<T> > find_attribute(string_view name)
```

```cpp
Defined at ../../include/geode/basic/attribute_manager.h#73
```

 Recover the typed Attribute from the attribute name

**name** [in] The associated attribute name to look for

**T** The type to of the ReadOnlyAttribute element

**exception** OpenGeodeException if no Attribute found

### find_or_create_attribute

```cpp
public std::shared_ptr<Attribute<T> > find_or_create_attribute(string_view name, T default_value, AttributeProperties properties)
```

```cpp
Defined at ../../include/geode/basic/attribute_manager.h#104
```

 Recover or create the attribute from the manager and the attribute name. If the recovered Attribute is not a of the same type than the attribute, it replaces it by the Attribute corresponding to the attribute.

**name** [in] The associated attribute name to look for

**default_value** [in] The default value to use when new attribute element are created

**properties** [in] The AttributeProperties to set the attribute flags for future modifications

**Attribute** The attribute type to look for, such as ConstantAttribute

**T** The type of the Attribute element

**exception** OpenGeodeException if the Attribute replacement failed

### find_or_create_attribute

```cpp
public std::shared_ptr<Attribute<T> > find_or_create_attribute(string_view name, T default_value)
```

```cpp
Defined at ../../include/geode/basic/attribute_manager.h#128
```

### resize

```cpp
public void resize(index_t size)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#344
```

 Resize all the attributes to the given size

**size** [in] The new attribute size

### reserve

```cpp
public void reserve(index_t capacity)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#349
```

 Reserve all the attributes to the given capacity

**size** [in] The new attribute capacity

### assign_attribute_value

```cpp
public void assign_attribute_value(index_t from_element, index_t to_element)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#364
```

 Assign attribute value from other value in the same attribute

**from_element** [in] Attribute value to assign

**to_element** [in] Where the value is assign

**warning** Only affect Attributes created with its AttributeProperties assignable flag set to true

### interpolate_attribute_value

```cpp
public void interpolate_attribute_value(const AttributeLinearInterpolation & interpolation, index_t to_element)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#370
```

 Interpolate attribute value from other values in the same attribute

**interpolation** [in] Attribute interpolator

**to_element** [in] Where the value is assign

**warning** Only affect Attributes created with its AttributeProperties interpolable flag set to true

### has_assignable_attributes

```cpp
public bool has_assignable_attributes()
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#354
```

### has_interpolable_attributes

```cpp
public bool has_interpolable_attributes()
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#359
```

### attribute_names

```cpp
public absl::FixedArray<absl::string_view> attribute_names()
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#376
```

 Get all the associated attribute names

### attribute_exists

```cpp
public bool attribute_exists(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#382
```

 Return true if an attribute matching the given name.

**name** [in] The attribute name to use

### delete_attribute

```cpp
public void delete_attribute(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#387
```

 Delete the attribute matching the given name. Do nothing if the name does not exist.

**name** [in] The attribute name to delete

### attribute_type

```cpp
public string_view attribute_type(string_view name)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#392
```

 Get the typeid name of the attribute type

**name** [in] The attribute name to use

### rename_attribute

```cpp
public void rename_attribute(string_view old_name, string_view new_name)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#449
```

### set_attribute_properties

```cpp
public void set_attribute_properties(string_view attribute_name, const AttributeProperties & new_properties)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#455
```

### clear

```cpp
public void clear()
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#398
```

 Remove all the attributes in the manager

### clear_attributes

```cpp
public void clear_attributes()
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#403
```

 Clear all the attribute content. This is equivalent to calling resize( 0 ).

### delete_elements

```cpp
public void delete_elements(const std::vector<bool> & to_delete)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#408
```

 Delete a set of attribute elements.

**to_delete** [in] a vector of size 

 nb_elements().

 If to_delete[e] is true, then the element e will be destroyed.

### permute_elements

```cpp
public void permute_elements(Span permutation)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#421
```

 Permute attribute elements.

**permutation** [in] Vector of size 

 nb_elements().

 Each value correponds to the destination index.

### nb_elements

```cpp
public index_t nb_elements()
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#427
```

 Get the number of elements in each attribute

### copy

```cpp
public void copy(const AttributeManager & attribute_manager)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#432
```

### import

```cpp
public void import(const AttributeManager & attribute_manager, Span old2new)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#437
```

### import

```cpp
public void import(const AttributeManager & attribute_manager, const GenericMapping<index_t> & old2new_mapping)
```

```cpp
Defined at /github/workspace/src/geode/basic/attribute_manager.cpp#443
```

### register_attribute_type

```cpp
public void register_attribute_type(PContext & context, string_view name)
```

```cpp
Defined at ../../include/geode/basic/attribute_manager.h#240
```

### delete_elements

```cpp
public void delete_elements(const int & to_delete)
```

 Delete a set of attribute elements.

**to_delete** [in] a vector of size 

 nb_elements().

 If to_delete[e] is true, then the element e will be destroyed.

### import

```cpp
public void import(const AttributeManager & attribute_manager, const int & old2new_mapping)
```



