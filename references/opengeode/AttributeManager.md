# class AttributeManager


 This class manages all its associated Attributes. Each Attribute is registered and can be retrieved by a given name.



## Functions

### AttributeManager

```cpp
public void AttributeManager(const AttributeManager & )
```


### operator=

```cpp
public AttributeManager & operator=(const AttributeManager & )
```


### AttributeManager

```cpp
public void AttributeManager()
```


### AttributeManager

```cpp
public void AttributeManager(AttributeManager && other)
```


### ~AttributeManager

```cpp
public void ~AttributeManager()
```


### find_generic_attribute

```cpp
public shared_ptr find_generic_attribute(string_view name)
```


 Recover the non-typed/generic Attribute from the attribute name. This can be used when attribute type is not known in a context.

**name** [in] The associated attribute name to look for.

**return** nullptr if no attribute matches the given name.

### find_attribute

```cpp
public std::shared_ptr<ReadOnlyAttribute<T> > find_attribute(string_view name)
```


 Recover the typed Attribute from the attribute name

**name** [in] The associated attribute name to look for

**T** The type to of the ReadOnlyAttribute element

**exception** OpenGeodeException if no Attribute found

### find_or_create_attribute

```cpp
public std::shared_ptr<Attribute<T> > find_or_create_attribute(string_view name, T default_value, AttributeProperties properties)
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


### resize

```cpp
public void resize(index_t size)
```


 Resize all the attributes to the given size

**size** [in] The new attribute size

### reserve

```cpp
public void reserve(index_t capacity)
```


 Reserve all the attributes to the given capacity

**size** [in] The new attribute capacity

### assign_attribute_value

```cpp
public void assign_attribute_value(index_t from_element, index_t to_element)
```


 Assign attribute value from other value in the same attribute

**from_element** [in] Attribute value to assign

**to_element** [in] Where the value is assign

**warning** Only affect Attributes created with its AttributeProperties assignable flag set to true

### interpolate_attribute_value

```cpp
public void interpolate_attribute_value(const AttributeLinearInterpolation & interpolation, index_t to_element)
```


 Interpolate attribute value from other values in the same attribute

**interpolation** [in] Attribute interpolator

**to_element** [in] Where the value is assign

**warning** Only affect Attributes created with its AttributeProperties interpolable flag set to true

### has_assignable_attributes

```cpp
public bool has_assignable_attributes()
```


### has_interpolable_attributes

```cpp
public bool has_interpolable_attributes()
```


### attribute_names

```cpp
public absl::FixedArray<absl::string_view> attribute_names()
```


 Get all the associated attribute names

### attribute_exists

```cpp
public bool attribute_exists(string_view name)
```


 Return true if an attribute matching the given name.

**name** [in] The attribute name to use

### delete_attribute

```cpp
public void delete_attribute(string_view name)
```


 Delete the attribute matching the given name. Do nothing if the name does not exist.

**name** [in] The attribute name to delete

### attribute_type

```cpp
public string_view attribute_type(string_view name)
```


 Get the typeid name of the attribute type

**name** [in] The attribute name to use

### rename_attribute

```cpp
public void rename_attribute(string_view old_name, string_view new_name)
```


### set_attribute_properties

```cpp
public void set_attribute_properties(string_view attribute_name, const AttributeProperties & new_properties)
```


### clear

```cpp
public void clear()
```


 Remove all the attributes in the manager

### clear_attributes

```cpp
public void clear_attributes()
```


 Clear all the attribute content. This is equivalent to calling resize( 0 ).

### delete_elements

```cpp
public void delete_elements(const std::vector<bool> & to_delete)
```


 Delete a set of attribute elements.

**to_delete** [in] a vector of size 

 nb_elements().

 If to_delete[e] is true, then the element e will be destroyed.

### permute_elements

```cpp
public void permute_elements(Span permutation)
```


 Permute attribute elements.

**permutation** [in] Vector of size 

 nb_elements().

 Each value correponds to the destination index.

### nb_elements

```cpp
public index_t nb_elements()
```


 Get the number of elements in each attribute

### copy

```cpp
public void copy(const AttributeManager & attribute_manager)
```


### import

```cpp
public void import(const AttributeManager & attribute_manager, Span old2new)
```


### import

```cpp
public void import(const AttributeManager & attribute_manager, const GenericMapping<index_t> & old2new_mapping)
```


### register_attribute_type

```cpp
public void register_attribute_type(PContext & context, string_view name)
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



