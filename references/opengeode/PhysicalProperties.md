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

# class PhysicalProperties


## Records

Info



## Functions

### PhysicalProperties

```cpp
public void PhysicalProperties()
```


### ~PhysicalProperties

```cpp
public void ~PhysicalProperties()
```


### has_physical_property

```cpp
public bool has_physical_property(PHYSICAL_PROPERTY_NAME name)
```


### physical_property_info

```cpp
public const Info & physical_property_info(PHYSICAL_PROPERTY_NAME name)
```


### save_physical_properties

```cpp
public void save_physical_properties(std::string_view directory)
```


### set_physical_property

```cpp
public void set_physical_property(PHYSICAL_PROPERTY_NAME name, ComponentType component_type, uuid attribute_id, BuilderKey )
```


### copy_physical_properties

```cpp
public void copy_physical_properties(const PhysicalProperties & other, BuilderKey )
```


### load_physical_properties

```cpp
public void load_physical_properties(std::string_view directory, BuilderKey )
```


### PhysicalProperties

```cpp
protected void PhysicalProperties(PhysicalProperties && other)
```


### operator=

```cpp
protected PhysicalProperties & operator=(PhysicalProperties && other)
```




