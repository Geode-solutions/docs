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

# class PhysicalPropertiesBuilder


 Class managing modification of PhysicalProperties



## Functions

### PhysicalPropertiesBuilder

```cpp
public void PhysicalPropertiesBuilder(PhysicalProperties & physical_properties)
```


### set_physical_property

```cpp
public void set_physical_property(PHYSICAL_PROPERTY_NAME name, ComponentType component_type, uuid attribute_id)
```


 Associate a physical property name to a model component.

**name** [in] Name of the physical property.

**component_type** [in] Type of the component carrying the physical property values.

**attribute_id** [in] Uuid of the attribute storing the physical property values inside the component meshes.

### copy_physical_properties

```cpp
public void copy_physical_properties(const PhysicalProperties & other)
```


### load_physical_properties

```cpp
public void load_physical_properties(std::string_view directory)
```




