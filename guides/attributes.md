<script setup>
import CodeExample from '/components/CodeExample.vue'
</script>

# Attributes
<!-- @include: ./links.md -->
In this guide, you will learn fundamental elements to understand and manipulate attributes in OpenGeode.

## What are attributes?

Attributes stand for properties you can add to OpenGeode objects, typically meshes. These properties are not directly stored on objects or meshes, so you can add Attributes on other objects.

Attributes are managed by an [`AttributeManager`]. Meshes have managers defined on their vertices, edges, facets, and so on. Updating a mesh (e.g. by adding or removing vertices) automatically updates all the attached [`AttributeManager`].

You can also create an [`AttributeManager`] that is not attached to a mesh.

## Create an Attribute

First of all, let's get an [`AttributeManager`] by the dedicated mesh methods:


<CodeExample>
<template v-slot:cpp>

```cpp
// Let's have a TriangulatedSurface3D& called mesh;
auto manager = mesh.polygon_attribute_manager();
...
```
</template>
<template v-slot:py>

```py
## Let's have a TriangulatedSurface3D called mesh
manager = mesh.polygon_attribute_manager()
```
  </template>
</CodeExample> 

<CodeExample>
<template v-slot:cpp>

```cpp
AttributeManager manager;
manager.resize( 10 );
auto attribute_ptr = manager.find_or_create_attribute< VariableAttribute, double >(
  "first_attribute", 12.3 );
manager.resize( 6 );
```
</template>
<template v-slot:py>

```py
manager = opengeode.AttributeManager()
manager.resize( 10 )
attribute_ptr = manager.find_or_create_attribute_variable_double( "first_attribute", 12.3 )
manager.resize( 6 )
```
  </template>
</CodeExample>

The first line of the above code creates a default [`AttributeManager`].

The second line resizes the created [`AttributeManager`]. It means that all Attributes associated to this [`AttributeManager`] will have exactly 10 values.

Note that this method can be called before and after the creation of Attributes associated to the [`AttributeManager`] (as done at the fourth line of the above code).

As in the standard library, there is also a method to reserve Attributes capacities.

Now, take a look at the third line of the above code. This line creates an attribute using the method `find_or_create_attribute`. Four elements are needed to define the Attribute to create:

- The **type** of Attribute storage (here a [`VariableAttribute`]): the first template parameter of the method (more details below);

- The **type** of Attribute values (here `double`): the second template parameter of the method;

- An **attribute name** (here `first_attribute`): the first parameter of the method `find_or_create_attribute`;

- The **default value** (here `12.3`) : the second parameter of the method.

If an attribute already exists with the same name, same storage and same value type, a pointer to the pre-existing attribute is returned without creating a new attribute. If an attribute already exists with the same name but a different storage or a different value type, an exception is thrown.


## Attribute Storage

Each attribute may be stored using a storage adapted to its use and its values. In OpenGeode, there are three types of attribute storage, but you can easily define your own. These storages are:

- [`VariableAttribute`]: one value is stored per attribute element. The number of stored values is equal to the attribute size;

- [`ConstantAttribute`]: all the attribute elements have the given default value as value. Only one value is stored (the default value);

- [`SparseAttribute`]: all the attribute elements have the given default value as value, excepted the ones that have been explicitly defined. The number of stored values is between one (only the default value) and the attribute size plus one (one value for each attribute element and the default value). This storage is useful if the number of values different from the default value is small with regards to the attribute size.

## Remove an Attribute
[`AttributeManager`] provides a method to remove an attribute given its name

<CodeExample>
<template v-slot:cpp>

```cpp
manager.delete_attribute( "first_attribute" );
```
</template>
<template v-slot:py>

```py
manager.delete_attribute( "first_attribute" )
```
  </template>
</CodeExample> 


## Get an attribute with a read-only access

[`AttributeManager`] provides a method to get a read-only access pointer to an attribute given its name and its value type:

<CodeExample>
<template v-slot:cpp>

```cpp
const auto read_only_attr = manager.find_attribute< double >( "first_attribute" );
```
</template>
<template v-slot:py>

```py
read_only_attr = manager.find_attribute_double( "first_attribute" )
```
  </template>
</CodeExample> 

If you do not know the type of the attribute, another way is to get a non-type Attribute called a generic attribute :

<CodeExample>
<template v-slot:cpp>

```cpp
const auto generic_attr = manager.find_generic_attribute( "first_attribute" );
const auto value = generic_attr->generic_value( 2 ); // get a float
```
</template>
<template v-slot:py>

```py
generic_attr = manager.find_generic_attribute( "first_attribute" )
value = generic_attr.generic_value( 2 ) ## get a float
```
  </template>
</CodeExample> 


The pointed object is an [`AttributeBase`] which is a non-typed attribute from which derive [`ConstantAttribute`], [`SparseAttribute`], and [`VariableAttribute`].

The type of generic values you can get by this way is `float`.

For not arythmetic types (e.g. `std::vector< double >`) or custom types (e.g. `MyType`), you should define how to convert this type into float. For instance : 

<CodeExample>
<template v-slot:cpp>

```cpp
template <>
struct GenericAttributeConversion< std::vector< double > >
{
  static float converted_value( const std::vector< double >& value )
  {
    return std::accumulate(value.begin(), value.end(), 0);
  }
};
```
</template>
<template v-slot:py>

```py
## Not applicable in python 
```
  </template>
</CodeExample> 

or

<CodeExample>
<template v-slot:cpp>

```cpp
template <> 
struct GenericAttributeConversion< MyType > 
{ 
  static float converted_value( const MyType& value ) 
  { 
    return value.get_a_float(); 
  } 
};
```
</template>
<template v-slot:py>

```py
## Not applicable in python 
```
  </template>
</CodeExample> 

## Modify attribute size

To modify the attribute size, you must use the [`AttributeManager`]. The first solution is to use the method `resize` as shown above. The second solution is to select the element to remove:

<CodeExample>
<template v-slot:cpp>

```cpp
AttributeManager manager;
manager.resize( 6 );
auto attribute_ptr = manager.find_or_create_attribute< VariableAttribute, double >(
  "first_attribute", 12.3 );
std::vector< bool > to_delete( 6, false );
to_delete[0] = true;
to_delete[3] = true;
manager.delete_elements( to_delete );
  ```
</template>
<template v-slot:py>

```py
manager = opengeode.AttributeManager()
manager.resize( 6 )
attribute_ptr = manager.find_or_create_attribute_variable_double( "first_attribute", 12.3 )
to_delete = [false] * 6
to_delete[0] = true
to_delete[3] = true
manager.delete_elements( to_delete )
```
  </template>
</CodeExample> 

Here the elements 0 and 3 are removed from all the attributes associated to the [`AttributeManager`].

## Modify attribute values

To modify the value of attribute elements, you may use either the attribute itself or its associated [`AttributeManager`]. In the code below, we show four ways of modifying attribute values:

<CodeExample>
<template v-slot:cpp>

```cpp
AttributeManager manager;
manager.resize( 6 );
auto attribute_ptr = manager.find_or_create_attribute< VariableAttribute, double >(
  "first_attribute", 12.3 );
// values: 12.3 12.3 12.3 12.3 12.3 12.3 

attribute_ptr->set_value( 1, 5.0 );
// values: 12.3 5.0 12.3 12.3 12.3 12.3 

const auto factor = 2;
attribute_ptr->modify_value( 4, [&factor]( double& value ){ value *= factor; } );
// values: 12.3 5.0 12.3 12.3 24.6 12.3 

manager.assign_attribute_value( 1, 2 );
// values: 12.3 5.0 5.0 12.3 24.6 12.3 

const AttributeLinearInterpolation interpolator{ {2, 4}, {0.5, 0.5} };
manager.interpolate_attribute_value( 0, interpolator );
// values: 14.8 5.0 5.0 12.3 24.6 12.3 
```
</template>
<template v-slot:py>

```py
manager = opengeode.AttributeManager()
manager.resize( 6 )
attribute = manager.find_or_create_attribute_variable_double( "first_attribute", 12.3 )
## values: 12.3 12.3 12.3 12.3 12.3 12.3 

attribute.set_value( 1, 5.0 )
## values: 12.3 5.0 12.3 12.3 12.3 12.3 

factor = 2
attribute.modify_value( 4, lambda value : value *= factor )
## values: 12.3 5.0 12.3 12.3 24.6 12.3 

manager.assign_attribute_value( 1, 2 )
## values: 12.3 5.0 5.0 12.3 24.6 12.3 

## Interpolation not available in python
```
  </template>
</CodeExample> 

If you use [`AttributeManager`] methods, the modification will be operated on all associated attributes.