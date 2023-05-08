import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  payments = [
    {
      name: 'role-built-in',
      provider: 'provider_pay_paypal',
      organization: 'built-in',
      user:'admin',
      created_at: '	2021-12-26 20:30:08',
      type: '	img',
      product: '',
      price: '0',
      currency: 'USD',
      state: 'paid',
      is_enabled: 'false',
    },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
    // {
    //   organization: 'built-in',
    //   name: 'role-built-in',
    //   created_at: '	2021-12-26 20:30:08',
    //   display_name: 'Built-in Role',
    //   sub_user: 'Built-in Role',
    //   sub_roles: 'Built-in Role',
    //   sub_domains: 'Built-in Role',
    //   content_type: 'application/json',
    //   events: ['built-in/erdengk', 'built-in/xzcr', 'built-in/Donny （FSD）', 'update-user'],
    //   is_user_extended: false,
    //   is_enabled: 'false',
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
