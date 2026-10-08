<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

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


### find_generic_attribute

```cpp
public std::shared_ptr<AttributeBase> find_generic_attribute(const geode::uuid & attribute_id)
```


 Recover the non-typed/generic Attribute from the attribute id. This can be used when attribute type is not known in a context.

**attribute_id** [in] The associated attribute id to look for.

**return** nullptr if no attribute matches the given id.

### find_read_only_attribute

```cpp
public std::shared_ptr<ReadOnlyAttribute<T>> find_read_only_attribute(const geode::uuid & attribute_id)
```


 Recover the typed Attribute from the attribute name

**name** [in] The associated attribute name to look for

**T** The type to of the ReadOnlyAttribute element

**exception**if no Attribute found

### find_attribute

```cpp
public std::shared_ptr<Attribute<T>> find_attribute(const geode::uuid & attribute_id)
```


### create_attribute

```cpp
public void create_attribute(std::string_view attribute_name, const geode::uuid & attribute_id, AttributeValues<T> default_values, AttributeProperties properties)
```


### create_attribute

```cpp
public geode::uuid create_attribute(std::string_view attribute_name, AttributeValues<T> default_values, AttributeProperties properties)
```


### create_time_step_attribute

```cpp
public geode::uuid create_time_step_attribute(std::string_view attribute_name, double time, AttributeValues<T> default_values, AttributeProperties properties)
```


 Create one step of a time series. A time series is the set of attributes sharing a name and having a time in their AttributeProperties.

**attribute_name** [in] The name of the series.

**time** [in] The time of this step, stored in properties.time.

**exception**if time is not finite, if an attribute with this name has no time, a different type or the same time.

### AttributeManager

```cpp
public void AttributeManager()
```


### AttributeManager

```cpp
public void AttributeManager(AttributeManager && other)
```


### operator=

```cpp
public AttributeManager & operator=(AttributeManager && other)
```


### ~AttributeManager

```cpp
public void ~AttributeManager()
```


### time_steps

```cpp
public std::vector<AttributeTimeStep> time_steps(std::string_view attribute_name)
```


 Get the steps of the time series with the given name, sorted by time. Empty if no attribute with this name has a time.

### time_series_names

```cpp
public std::vector<std::string> time_series_names()
```


 Get the distinct names of the attributes having a time.

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

### copy_attribute_value

```cpp
public void copy_attribute_value(index_t from_element, index_t to_element)
```


 Copy attribute value from other value in the same attribute

**from_element** [in] Attribute value to assign

**to_element** [in] Where the value is assigned

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


### attribute_ids

```cpp
public absl::FixedArray<geode::uuid> attribute_ids()
```


 Get all the associated attribute ids

### attribute_exists

```cpp
public bool attribute_exists(const geode::uuid & )
```


 Return true if an attribute matching the given id.

**id** [in] The attribute id to use

### delete_attribute

```cpp
public void delete_attribute(const geode::uuid & )
```


 Delete the attribute matching the given id. Do nothing if the id does not exist.

**id** [in] The attribute id to delete

### copy_attribute

```cpp
public void copy_attribute(const geode::uuid & attribute_id, const geode::uuid & new_attribute_id)
```


 Create a new attribute with the given id by copying the values of an existing attribute of this manager.

**attribute_id** [in] The id of the attribute to copy.

**new_attribute_id** [in] The id to give to the new attribute.

### attribute_type

```cpp
public std::string_view attribute_type(const geode::uuid & )
```


 Get the typeid id of the attribute type

**id** [in] The attribute id to use

### set_attribute_properties

```cpp
public void set_attribute_properties(geode::uuid attribute_id, const AttributeProperties & new_properties)
```


 Replace all the properties of the attribute.

**warning** The time is replaced too: passing properties with an empty time removes the attribute from its time series.

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
public void permute_elements(absl::Span<const index_t> permutation)
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

### attribute_ids_matching_name

```cpp
public std::optional<std::vector<uuid>> attribute_ids_matching_name(std::string_view name)
```


### copy

```cpp
public void copy(const AttributeManager & attribute_manager)
```


### import

```cpp
public void import(const AttributeManager & attribute_manager, const GenericMapping<index_t> & old2new_mapping)
```


### import

```cpp
public void import(const AttributeManager & attribute_manager, const GenericMapping<index_t> & old2new_mapping, const uuid & attribute_id)
```




