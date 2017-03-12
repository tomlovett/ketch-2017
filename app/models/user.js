import DS from 'ember-data';

const { attr, belongsTo, Model } = DS;

export default Model.extend({
  // email
  player: belongsTo(),
});


// import { validator, buildValidations } from 'ember-cp-validations';

// const Validations = buildValidations({
//   email: [
//     validator('presence', {
//       presence: true,
//       description: 'Email',
//     }),
//     validator('format', {
//       type: 'email',
//       description: 'Email',
//     }),
//   ],
//   firstName: validator('presence', {
//     presence: true,
//     description: 'First name',
//   }),
//   lastName: validator('presence', {
//     presence: true,
//     description: 'Last name',
//   }),
//   permissions: validator('length', { min: 1 }),
//   currentPassword: [
//     validator('presence', {
//       presence: true,
//       description: 'Current password',
//       disabled: computed.empty('model.password'),
//     }),
//   ],
//   password: [
//     validator('presence', {
//       presence: true,
//       description: 'New password',
//       disabled: computed.empty('model.password'),
//     }),
//     validator('length', {
//       min: 8,
//       description: 'New password',
//       disabled: computed.empty('model.password'),
//     })
//   ],
//   passwordConfirmation: [
//     validator('presence', {
//       presence: true,
//       description: 'Password confirmation',
//       disabled: computed.empty('model.password'),
//     }),
//     validator('confirmation', {
//       on: 'password',
//       description: 'Passwords',
//       message: '{description} do not match',
//       disabled: computed.empty('model.password') && computed.empty('model.passwordConfirmation'),
//     }),
//   ],
// });

// export default DS.Model.extend(
//   Validations, {

//   business: belongsTo('business', { async: true }),
//   currentPassword: attr('string'),
//   email: attr('string'),
//   firstName: attr('string'),
//   isConfirmed: attr('boolean'),
//   isJebbitEmployee: attr('boolean'),
//   lastName: attr('string'),
//   overseeableBusinessCount: attr('number'),
//   password: attr('string'),
//   passwordConfirmation: attr('string'),
//   permissions: hasMany('permission', { async: false }),

//   fullName: computed('firstName', 'lastName', function() {
//     let { firstName, lastName } = this.getProperties([
//       'firstName', 'lastName'
//     ]);

//     firstName = firstName || '';
//     lastName = lastName || '';

//     return `${firstName} ${lastName}`;
//   }),
//   overseesMultipleBusinesses: computed.gt('overseeableBusinessCount', 1),
//   canUpdateCampaignResources: computed(function() {
//     return this.hasPermissionTo('edit_campaign_resources');
//   }),
//   canCreateCampaignResources: computed(function() {
//     return this.hasPermissionTo('create_campaign_resources');
//   }),
//   canViewJebbitOnlyFeatures: computed(function() {
//     return this.hasPermissionTo('view_jebbit_only_features');
//   }),
//   hasTopPermissions: computed.or('canViewJebbitOnlyFeatures', 'canCreateCampaignResources'),

//   canCreateAndEditCampaigns: function(businessId) {
//     return this.canCreateAndEditChildBusinesses(businessId) || (
//       this.hasPermissionTo('create_edit_campaigns') && this._businessMatch(businessId)
//     );
//   },

//   canCreateAndEditChildBusinesses: function(businessId) {
//     return this.hasPermissionTo('create_edit_child_businesses') &&
//            this._overseesBusiness(businessId);
//   },

//   canCreateAndEditUsers: function(businessId) {
//     return this.canCreateAndEditChildBusinesses(businessId) || (
//       this.hasPermissionTo('create_edit_users') && this._businessMatch(businessId)
//     );
//   },

//   canEditAccount: function() {
//     return this.hasPermissionTo('edit_account');
//   },

//   canEditBusiness: function(businessId) {
//     return this.canCreateAndEditChildBusinesses(businessId) || (
//       this.hasPermissionTo('edit_business') && this._businessMatch(businessId)
//     );
//   },

//   canViewBusiness: function(businessId) {
//     return this._overseesBusiness(businessId) || this._businessMatch(businessId);
//   },

//   canViewChildBusinesses: function(businessId) {
//     return this.hasPermissionTo('view_child_businesses') &&
//            this._overseesBusiness(businessId);
//   },

//   canViewPrereleaseFeatures: function() {
//     return this.hasPermissionTo('view_prerelease_features');
//   },

//   canViewStats: function(businessId) {
//     return this.hasPermissionTo('view_stats') && this.canViewBusiness(businessId);
//   },

//   hasPermissionTo: function(permissionShortName) {
//     const permissions = this.get('permissions');

//     return permissions &&
//            permissions.findBy('id', permissionShortName);
//   },

//   /* Private Methods */

//   _businessMatch: function(businessId) {
//     return parseInt(this.get('business.id')) === parseInt(businessId);
//   },

//   _overseesBusiness: function(businessId) {
//     return this.get('overseeableBusinessIds').indexOf(parseInt(businessId)) > -1;
//   },
// });
